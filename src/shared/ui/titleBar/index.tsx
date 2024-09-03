import { WrapperTitleBar } from './titleBar.styled.tsx'
import { appWindow } from '@tauri-apps/api/window'
import { BlockOutlined, BorderOutlined, CloseOutlined, MinusOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import { tauriService } from '@/shared/services'
import { useQuery } from '@tanstack/react-query'
import { Logo } from '@/shared/ui/Logo'

export type TitleBarProps = {
    variant?: 'ghost' | 'base'
}

export const TitleBar = (props: TitleBarProps) => {
    const { variant = 'base' } = props
    const { data: isFullScreen, refetch } = useQuery({
        queryKey: ['isFullScreen'],
        queryFn: () => tauriService.isFullscreen()
    })

    const toggleFullScreen = () => {
        appWindow.toggleMaximize()
        refetch()
    }

    return (
        <WrapperTitleBar variant={variant}>
            {variant === 'base' && <Logo size={'small'} />}
            <Space size={0}>
                <Button
                    icon={<MinusOutlined />}
                    size={'small'}
                    style={{ padding: '0 1rem', boxShadow: 'none' }}
                    onClick={() => {
                        appWindow.minimize()
                        refetch()
                    }}
                />

                {isFullScreen ? (
                    <Button
                        size={'small'}
                        style={{ padding: '0 1rem', boxShadow: 'none' }}
                        onClick={toggleFullScreen}
                        icon={<BlockOutlined size={12} />}
                    />
                ) : (
                    <Button
                        size={'small'}
                        style={{ padding: '0 1rem', boxShadow: 'none' }}
                        onClick={toggleFullScreen}
                        icon={<BorderOutlined size={12} />}
                    />
                )}

                <Button
                    size={'small'}
                    style={{ padding: '0 1rem', boxShadow: 'none' }}
                    onClick={() => appWindow.close()}
                    icon={<CloseOutlined size={12} />}
                />
            </Space>
        </WrapperTitleBar>
    )
}
