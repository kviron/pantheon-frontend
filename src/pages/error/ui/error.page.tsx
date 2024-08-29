import { useTranslation } from 'react-i18next'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
    const error = useRouteError()
    const { t } = useTranslation()

    console.error(error)

    return (
        <div id='error-page'>
            <h1>{t('Oops!')}</h1>
            <p>{t('Sorry, an unexpected error has occurred.')}</p>
            {isRouteErrorResponse(error) ? (
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            ) : null}
        </div>
    )
}
