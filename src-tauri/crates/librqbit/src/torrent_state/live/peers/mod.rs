use std::{net::SocketAddr, sync::Arc};

use anyhow::Context;
use backoff::backoff::Backoff;
use dashmap::DashMap;
use librqbit_core::lengths::ValidPieceIndex;
use peer_binary_protocol::{Message, Request};

use crate::{
    peer_connection::WriterRequest,
    session_stats::atomic::AtomicSessionStats,
    torrent_state::utils::{atomic_inc, TimedExistence},
    type_aliases::{PeerHandle, BF},
};

use self::stats::{atomic::AggregatePeerStatsAtomic, snapshot::AggregatePeerStats};

use super::peer::{LivePeerState, Peer, PeerRx, PeerState, PeerTx};

pub mod stats;

pub(crate) struct PeerStates {
    pub session_stats: Arc<AtomicSessionStats>,
    pub stats: AggregatePeerStatsAtomic,
    pub states: DashMap<PeerHandle, Peer>,
}

impl Drop for PeerStates {
    fn drop(&mut self) {
        for (_, p) in std::mem::take(&mut self.states).into_iter() {
            p.state.destroy(&[&self.session_stats.peers]);
        }
    }
}

impl PeerStates {
    pub fn stats(&self) -> AggregatePeerStats {
        AggregatePeerStats::from(&self.stats)
    }

    pub fn add_if_not_seen(&self, addr: SocketAddr) -> Option<PeerHandle> {
        use dashmap::mapref::entry::Entry;
        match self.states.entry(addr) {
            Entry::Occupied(_) => None,
            Entry::Vacant(vac) => {
                vac.insert(Default::default());
                atomic_inc(&self.stats.queued);
                atomic_inc(&self.session_stats.peers.queued);

                atomic_inc(&self.stats.seen);
                atomic_inc(&self.session_stats.peers.seen);
                Some(addr)
            }
        }
    }
    pub fn with_peer<R>(&self, addr: PeerHandle, f: impl FnOnce(&Peer) -> R) -> Option<R> {
        self.states.get(&addr).map(|e| f(e.value()))
    }

    pub fn with_peer_mut<R>(
        &self,
        addr: PeerHandle,
        reason: &'static str,
        f: impl FnOnce(&mut Peer) -> R,
    ) -> Option<R> {
        use crate::torrent_state::utils::timeit;
        timeit(reason, || self.states.get_mut(&addr))
            .map(|e| f(TimedExistence::new(e, reason).value_mut()))
    }

    pub fn with_live<R>(&self, addr: PeerHandle, f: impl FnOnce(&LivePeerState) -> R) -> Option<R> {
        self.with_peer(addr, |peer| peer.state.get_live().map(f))
            .flatten()
    }

    pub fn with_live_mut<R>(
        &self,
        addr: PeerHandle,
        reason: &'static str,
        f: impl FnOnce(&mut LivePeerState) -> R,
    ) -> Option<R> {
        self.with_peer_mut(addr, reason, |peer| peer.state.get_live_mut().map(f))
            .flatten()
    }

    pub fn drop_peer(&self, handle: PeerHandle) -> Option<Peer> {
        let p = self.states.remove(&handle).map(|r| r.1)?;
        let s = p.state.get();
        self.stats.dec(s);
        self.session_stats.peers.dec(s);

        Some(p)
    }

    pub fn is_peer_interested(&self, handle: PeerHandle) -> bool {
        self.with_live(handle, |live| live.peer_interested)
            .unwrap_or(false)
    }

    pub fn mark_peer_interested(&self, handle: PeerHandle, is_interested: bool) -> Option<bool> {
        self.with_live_mut(handle, "mark_peer_interested", |live| {
            let prev = live.peer_interested;
            live.peer_interested = is_interested;
            prev
        })
    }

    pub fn update_bitfield_from_vec(&self, handle: PeerHandle, bitfield: Box<[u8]>) -> Option<()> {
        self.with_live_mut(handle, "update_bitfield_from_vec", |live| {
            live.bitfield = BF::from_boxed_slice(bitfield);
        })
    }
    pub fn mark_peer_connecting(&self, h: PeerHandle) -> anyhow::Result<(PeerRx, PeerTx)> {
        let rx = self
            .with_peer_mut(h, "mark_peer_connecting", |peer| {
                peer.state
                    .idle_to_connecting(&[&self.stats, &self.session_stats.peers])
                    .context("invalid peer state")
            })
            .context("peer not found in states")??;
        Ok(rx)
    }

    pub fn reset_peer_backoff(&self, handle: PeerHandle) {
        self.with_peer_mut(handle, "reset_peer_backoff", |p| {
            p.stats.backoff.reset();
        });
    }

    pub fn mark_peer_not_needed(&self, handle: PeerHandle) -> Option<PeerState> {
        let prev = self.with_peer_mut(handle, "mark_peer_not_needed", |peer| {
            peer.state
                .set_not_needed(&[&self.stats, &self.session_stats.peers])
        })?;
        Some(prev)
    }

    pub(crate) fn on_steal(
        &self,
        from_peer: SocketAddr,
        to_peer: SocketAddr,
        stolen_idx: ValidPieceIndex,
    ) {
        self.with_peer(to_peer, |p| {
            atomic_inc(&p.stats.counters.times_i_stole);
        });
        self.with_peer(from_peer, |p| {
            atomic_inc(&p.stats.counters.times_stolen_from_me);
        });
        self.stats.inc_steals();
        self.session_stats.peers.inc_steals();

        self.with_live_mut(from_peer, "send_cancellations", |live| {
            let to_remove = live
                .inflight_requests
                .iter()
                .filter(|r| r.piece_index == stolen_idx)
                .copied()
                .collect::<Vec<_>>();
            for req in to_remove {
                let _ = live
                    .tx
                    .send(WriterRequest::Message(Message::Cancel(Request {
                        index: stolen_idx.get(),
                        begin: req.offset,
                        length: req.size,
                    })));
            }
        });
    }
}
