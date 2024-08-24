import { useTranslation } from 'react-i18next'

export const NotFoundPage = () => {
    const { t } = useTranslation()
    return <div>{t('page 404')}</div>
}
