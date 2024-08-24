import { useTranslation } from 'react-i18next'

const ForbiddenPage = () => {
    const { t } = useTranslation()
    return <div>{t('Forbidden')}</div>
}

export default ForbiddenPage
