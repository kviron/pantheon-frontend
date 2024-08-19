import { Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import { useTheme } from '@/shared/hooks/useTheme.ts'
import { Logo, ToolBar, Wrapper } from '@/entities/Game/ui/GameHero/controls.tsx'
import { Game } from '@/entities/Game'
import { useTranslation } from 'react-i18next'

type GameHeroProps = {
    game: Game
}

export const GameHero = (props: GameHeroProps) => {
    const { game } = props
    const { theme } = useTheme()
    const { t } = useTranslation('application')

    return (
        <Wrapper background={game.banner}>
            <Logo src={game.logo?.path} />

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
