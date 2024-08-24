import { App } from 'antd'
import { ReactNode, StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from './error.provider'
import { QueryProvider } from './query.provider'
import { ThemeProvider } from './theme.provider'

type AppProviderProps = {
    children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <StrictMode>
            <ErrorBoundary>
                <BrowserRouter>
                    <QueryProvider>
                        <ThemeProvider>
                            <App>{children}</App>
                        </ThemeProvider>
                    </QueryProvider>
                </BrowserRouter>
            </ErrorBoundary>
        </StrictMode>
    )
}
