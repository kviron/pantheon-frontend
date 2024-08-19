import { useTranslation } from 'react-i18next'

export const NotFoundPage = () => {
    const { t } = useTranslation()
    return <div>{t('Page 404')}</div>
}
