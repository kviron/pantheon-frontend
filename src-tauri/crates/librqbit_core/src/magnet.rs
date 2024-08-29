use std::str::FromStr;

use anyhow::Context;

use crate::hash_id::{Id20, Id32};

/// A parsed magnet link.
pub struct Magnet {
    id20: Option<Id20>,
    id32: Option<Id32>,
    pub trackers: Vec<String>,
}

impl Magnet {
    pub fn as_id20(&self) -> Option<Id20> {
        self.id20
    }

    pub fn as_id32(&self) -> Option<Id32> {
        self.id32
    }

    pub fn from_id20(id20: Id20, trackers: Vec<String>) -> Self {
        Self {
            id20: Some(id20),
            id32: None,
            trackers,
        }
    }

    /// Parse a magnet link.
    pub fn parse(url: &str) -> anyhow::Result<Magnet> {
        let url = url::Url::parse(url).context("magnet link must be a valid URL")?;
        if url.scheme() != "magnet" {
            anyhow::bail!("expected scheme magnet");
        }
        let mut info_hash_found = false;
        let mut id20: Option<Id20> = None;
        let mut id32: Option<Id32> = None;
        let mut trackers = Vec::<String>::new();
        for (key, value) in url.query_pairs() {
            match key.as_ref() {
                "xt" => {
                    if let Some(ih) = value.as_ref().strip_prefix("urn:btih:") {
                        let i = Id20::from_str(ih)?;
                        id20.replace(i);
                        info_hash_found = true;
                    } else if let Some(ih) = value.as_ref().strip_prefix("urn:btmh:1220") {
                        let i = Id32::from_str(ih)?;
                        id32.replace(i);
                        info_hash_found = true;
                    } else {
                        anyhow::bail!("expected xt to start with btih or btmh");
                    }
                }
                "tr" => trackers.push(value.into()),
                _ => {}
            }
        }
        match info_hash_found {
            true => Ok(Magnet {
                id20,
                id32,
                trackers,
            }),
            false => {
                anyhow::bail!("did not find infohash")
            }
        }
    }
}

impl std::fmt::Display for Magnet {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> core::fmt::Result {
        write!(f, "magnet:")?;
        let mut write_ampersand = {
            let mut written_so_far = 0;
            move |f: &mut std::fmt::Formatter<'_>| -> core::fmt::Result {
                if written_so_far == 0 {
                    write!(f, "?")?;
                } else {
                    write!(f, "&")?;
                }
                written_so_far += 1;
                Ok(())
            }
        };
        if let Some(id20) = self.id20 {
            write_ampersand(f)?;
            write!(f, "xt=urn:btih:{}", id20.as_string(),)?;
        }
        if let Some(id32) = self.id32 {
            write_ampersand(f)?;
            write!(f, "xt=xt=urn:btmh:1220{}", id32.as_string(),)?;
        }
        for tracker in self.trackers.iter() {
            write_ampersand(f)?;
            write!(f, "tr={tracker}")?;
        }
        Ok(())
    }
}

#[cfg(test)]
mod tests {
    use std::str::FromStr;

    use crate::Id20;

    use super::Magnet;

    #[test]
    fn test_parse_magnet_as_url() {
        let magnet = "magnet:?xt=urn:btih:a621779b5e3d486e127c3efbca9b6f8d135f52e5&dn=rutor.info_%D0%92%D0%BE%D0%B9%D0%BD%D0%B0+%D0%B1%D1%83%D0%B4%D1%83%D1%89%D0%B5%D0%B3%D0%BE+%2F+The+Tomorrow+War+%282021%29+WEB-DLRip+%D0%BE%D1%82+MegaPeer+%7C+P+%7C+NewComers&tr=udp://opentor.org:2710&tr=udp://opentor.org:2710&tr=http://retracker.local/announce";
        dbg!(url::Url::parse(magnet).unwrap());
    }

    #[test]
    fn test_parse_magnet_v2() {
        use super::Magnet;
        use crate::magnet::Id32;
        use std::str::FromStr;
        let magnet = "magnet:?xt=urn:btmh:1220caf1e1c30e81cb361b9ee167c4aa64228a7fa4fa9f6105232b28ad099f3a302e&dn=bittorrent-v2-test
";
        let info_hash =
            Id32::from_str("caf1e1c30e81cb361b9ee167c4aa64228a7fa4fa9f6105232b28ad099f3a302e")
                .unwrap();
        let m = Magnet::parse(magnet).unwrap();
        assert!(m.as_id32() == Some(info_hash));
    }

    #[test]
    fn test_magnet_to_string() {
        let id20 = Id20::from_str("a621779b5e3d486e127c3efbca9b6f8d135f52e5").unwrap();
        assert_eq!(
            &Magnet::from_id20(id20, Default::default()).to_string(),
            "magnet:?xt=urn:btih:a621779b5e3d486e127c3efbca9b6f8d135f52e5"
        );

        assert_eq!(
            &Magnet::from_id20(id20, vec!["foo".to_string(), "bar".to_string()]).to_string(),
            "magnet:?xt=urn:btih:a621779b5e3d486e127c3efbca9b6f8d135f52e5&tr=foo&tr=bar"
        );
    }
}
