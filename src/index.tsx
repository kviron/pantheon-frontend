/* @refresh reload */
import 'reset-css'
import './shared/config/i18n.config'

import { createRoot } from 'react-dom/client'
import App from '@/app/app'
import { AppProvider } from '@/app/providers'

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
