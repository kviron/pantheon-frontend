import { TorrentAPIContext } from '@/shared/context'
import { useContext } from 'react'

export const useTorrentApi = () => {
    const api = useContext(TorrentAPIContext)

    return {
        api
    }
}
