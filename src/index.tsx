/* @refresh reload */
import './shared/config/i18n.config'
import 'reset-css'
import '@/app/styles/global.scss'

import { createRoot } from 'react-dom/client'
import { AppProvider } from '@/app/providers'
import App from '@/app/app'

const container = document.getElementById('root')

if (!container) {
    throw new Error('Контейнер root не найден. НЕ удалось вмонтировать реакт приложение')
}

const root = createRoot(container)

root.render(
    <AppProvider>
        <App />
    </AppProvider>
)
