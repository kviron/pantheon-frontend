import { useTranslation } from 'react-i18next'

export default function ErrorPage() {
    const { t } = useTranslation()

    return (
        <div id='error-page'>
            <h1>{t('Oops!')}</h1>
            <p>{t('Sorry, an unexpected error has occurred.')}</p>
        </div>
    )
}
