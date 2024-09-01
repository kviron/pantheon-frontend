import { useTranslation } from 'react-i18next'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { Layout, Typography } from 'antd'
import { Content } from './error.styled.tsx'

export default function ErrorPage() {
    const error = useRouteError()
    const { t } = useTranslation('translation')

    return (
        <Layout id='error-page'>
            <Content>
                <Typography.Title>{t('Oops!')}</Typography.Title>
                <Typography>
                    <p>{t('Sorry, an unexpected error has occurred.')}</p>
                    {isRouteErrorResponse(error) ? (
                        <p>
                            <i>{error.statusText || error.message}</i>
                        </p>
                    ) : null}
                </Typography>
            </Content>
        </Layout>
    )
}
