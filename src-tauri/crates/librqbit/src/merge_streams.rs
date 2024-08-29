use std::{
    sync::atomic::{AtomicU64, Ordering},
    task::Poll,
};

use futures::Stream;

struct MergedStreams<S1, S2> {
    poll_count: AtomicU64,
    s1: futures::stream::Fuse<S1>,
    s2: futures::stream::Fuse<S2>,
}

pub fn merge_streams<
    I,
    S1: Stream<Item = I> + 'static + Unpin,
    S2: Stream<Item = I> + 'static + Unpin,
>(
    s1: S1,
    s2: S2,
) -> impl Stream<Item = I> + Unpin + 'static {
    use futures::stream::StreamExt;
    MergedStreams {
        poll_count: AtomicU64::new(0),
        s1: s1.fuse(),
        s2: s2.fuse(),
    }
}

fn poll_two<I, S1: Stream<Item = I> + Unpin, S2: Stream<Item = I> + Unpin>(
    s1: &mut S1,
    s2: &mut S2,
    cx: &mut std::task::Context<'_>,
) -> Poll<Option<I>> {
    use futures::StreamExt;
    let s1p = s1.poll_next_unpin(cx);
    match s1p {
        Poll::Ready(Some(v)) => Poll::Ready(Some(v)),
        Poll::Ready(None) => match s2.poll_next_unpin(cx) {
            Poll::Ready(Some(v)) => Poll::Ready(Some(v)),
            Poll::Ready(None) => Poll::Ready(None),
            Poll::Pending => Poll::Pending,
        },
        Poll::Pending => match s2.poll_next_unpin(cx) {
            Poll::Ready(Some(v)) => Poll::Ready(Some(v)),
            Poll::Ready(None) | Poll::Pending => Poll::Pending,
        },
    }
}

impl<S1, S2, I> Stream for MergedStreams<S1, S2>
where
    S1: Stream<Item = I> + Unpin,
    S2: Stream<Item = I> + Unpin,
{
    type Item = I;

    fn poll_next(
        self: std::pin::Pin<&mut Self>,
        cx: &mut std::task::Context<'_>,
    ) -> Poll<Option<Self::Item>> {
        let this = self.get_mut();
        let s1_first = this.poll_count.fetch_add(1, Ordering::Relaxed) % 2 == 0;
        if s1_first {
            poll_two(&mut this.s1, &mut this.s2, cx)
        } else {
            poll_two(&mut this.s2, &mut this.s1, cx)
        }
    }
}
