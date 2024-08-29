import {
    AddTorrentOptions,
    AddTorrentResponse,
    ListTorrentsResponse,
    SessionStats,
    TorrentDetails,
    TorrentStats
} from '@/shared/types/torrent.ts'
import { $torrentApi, apiUrl } from '@/shared/api/torrent'

class TorrentService {
    apiUrl = ''

    constructor() {
        this.apiUrl = apiUrl
    }
    getStreamLogsUrl = () => {
        return this.apiUrl + '/stream_logs'
    }

    listTorrents = (): Promise<ListTorrentsResponse> => $torrentApi.get('/torrents')

    getTorrentDetails = (index: number): Promise<TorrentDetails> => {
        return $torrentApi.get(`/torrents/${index}`)
    }

    getTorrentStats = (index: number): Promise<TorrentStats> => {
        return $torrentApi.get(`/torrents/${index}/stats/v1`)
    }

    stats = (): Promise<SessionStats> => {
        return $torrentApi.get('/stats')
    }

    uploadTorrent = (data: string | File, opts?: AddTorrentOptions): Promise<AddTorrentResponse> => {
        let url = '/torrents?&overwrite=true'
        if (opts?.list_only) {
            url += '&list_only=true'
        }
        if (opts?.only_files != null) {
            url += `&only_files=${opts.only_files.join(',')}`
        }
        if (opts?.peer_opts?.connect_timeout) {
            url += `&peer_connect_timeout=${opts.peer_opts.connect_timeout}`
        }
        if (opts?.peer_opts?.read_write_timeout) {
            url += `&peer_read_write_timeout=${opts.peer_opts.read_write_timeout}`
        }
        if (opts?.initial_peers) {
            url += `&initial_peers=${opts.initial_peers.join(',')}`
        }
        if (opts?.output_folder) {
            url += `&output_folder=${opts.output_folder}`
        }
        if (typeof data === 'string') {
            url += '&is_url=true'
        }
        return $torrentApi.post(url, { data })
    }

    updateOnlyFiles = (index: number, files: number[]): Promise<void> => {
        let url = `/torrents/${index}/update_only_files`
        return $torrentApi.get(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                only_files: files
            }
        })
    }

    pause = (index: number): Promise<void> => {
        return $torrentApi.post(`/torrents/${index}/pause`)
    }

    start = (index: number): Promise<void> => {
        return $torrentApi.post(`/torrents/${index}/start`)
    }

    forget = (index: number): Promise<void> => {
        return $torrentApi.post(`/torrents/${index}/forget`)
    }

    delete = (index: number): Promise<void> => {
        return $torrentApi.post(`/torrents/${index}/delete`)
    }

    getTorrentStreamUrl = (index: number, file_id: number, filename?: string | null) => {
        let url = this.apiUrl + `/torrents/${index}/stream/${file_id}`

        if (!!filename) {
            url += `/${filename}`
        }

        return url
    }

    getPlaylistUrl = (index: number) => {
        return (this.apiUrl || window.origin) + `/torrents/${index}/playlist`
    }
}

export const torrentService = new TorrentService()
