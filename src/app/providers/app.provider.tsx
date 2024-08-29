import { App } from 'antd'
import { ReactNode, StrictMode } from 'react'
import { ErrorBoundary } from './error.provider'
import { QueryProvider } from './query.provider'
import { ThemeProvider } from './theme.provider'
import { TorrentProvider } from './torrent.provider'

type AppProviderProps = {
    children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <StrictMode>
            <ErrorBoundary>
                <TorrentProvider>
                    <QueryProvider>
                        <ThemeProvider>
                            <App>{children}</App>
                        </ThemeProvider>
                    </QueryProvider>
                </TorrentProvider>
            </ErrorBoundary>
        </StrictMode>
    )
}
