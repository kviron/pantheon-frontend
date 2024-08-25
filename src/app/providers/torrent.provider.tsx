import { TorrentAPIContext } from '@/shared/context'
import { ReactNode } from 'react'
import { TorrentApi } from '@/shared/api'

type TorrentProviderProps = {
    children: ReactNode
}

export const TorrentProvider = (props: TorrentProviderProps) => {
    const { children } = props

    return <TorrentAPIContext.Provider value={TorrentApi}>{children}</TorrentAPIContext.Provider>
}
