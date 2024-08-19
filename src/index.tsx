/* @refresh reload */
import 'reset-css'
import './shared/config/i18n/i18n'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from '@/app/providers/ErrorBoundary'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import App from '@/app/App.tsx'
import { StrictMode } from 'react'
import { App as AntdAppProvider } from 'antd'
import { QueryProvider } from '@/app/providers/QueryProvider'
import { BrowserRouter } from 'react-router-dom'

const container = document.getElementById('root')

if (!container) {
    throw new Error('Контейнер root не найден. НЕ удалось вмонтировать реакт приложение')
}

const root = createRoot(container)

root.render(
    <StrictMode>
        <ErrorBoundary>
            <BrowserRouter>
                <QueryProvider>
                    <ThemeProvider>
                        <AntdAppProvider>
                            <App />
                        </AntdAppProvider>
                    </ThemeProvider>
                </QueryProvider>
            </BrowserRouter>
        </ErrorBoundary>
    </StrictMode>
)
