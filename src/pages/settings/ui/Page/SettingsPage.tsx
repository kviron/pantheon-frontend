import { useTranslation } from 'react-i18next'

const SettingsPage = () => {
    const { t } = useTranslation()
    return <div>{t('Settings')}</div>
}

export default SettingsPage
