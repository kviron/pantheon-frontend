import { Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import { useTheme } from '@/shared/hooks'
import { Logo, ToolBar, Wrapper } from './controls'
import { Application } from '../../model/application.types'
import { useTranslation } from 'react-i18next'

type GameHeroProps = {
    application: Application
}

export const ApplicationHero = (props: GameHeroProps) => {
    const { application } = props
    const { theme } = useTheme()
    const { t } = useTranslation('application')

    return (
        <Wrapper background={application.banner}>
            <Logo src={application.logo?.path} />

            <ToolBar themeMode={theme}>
                <Button
                    type={'primary'}
                    size={'large'}
                    icon={<DownloadOutlined />}
                >
                    {t('Install')}
                </Button>
            </ToolBar>
        </Wrapper>
    )
}
