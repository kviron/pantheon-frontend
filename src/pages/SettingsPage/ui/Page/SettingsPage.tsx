import { SettingLayout } from '@/pages/SettingsPage/ui/Layout'
import { useTranslation } from 'react-i18next'

const SettingsPage = () => {
    const { t } = useTranslation()
    return <SettingLayout>{t('Settings')}</SettingLayout>
}

export default SettingsPage
