import { TorrentDetails, TorrentStats } from '@/shared/types/torrent'
import { formatSecondsToTime } from './formats'

function getLargestFileName(torrentDetails: TorrentDetails): string {
    const largestFile = torrentDetails.files
        .filter(f => f.included)
        .reduce((prev: any, current: any) => (prev.length > current.length ? prev : current))
    return largestFile.name
}

export function torrentDisplayName(torrentDetails: TorrentDetails): string {
    return torrentDetails.name ?? getLargestFileName(torrentDetails)
}

export function getCompletionETA(stats: TorrentStats): string {
    let duration = stats?.live?.time_remaining?.duration?.secs
    if (duration == null) {
        return 'N/A'
    }
    return formatSecondsToTime(duration)
}
