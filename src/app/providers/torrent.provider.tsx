import { TorrentAPIContext } from '@/shared/context'
import { ReactNode } from 'react'
import { torrentService } from '@/features/torrent/model/torrent.service.ts'

type TorrentProviderProps = {
    children: ReactNode
}

export const TorrentProvider = (props: TorrentProviderProps) => {
    const { children } = props

    return <TorrentAPIContext.Provider value={torrentService}>{children}</TorrentAPIContext.Provider>
}
