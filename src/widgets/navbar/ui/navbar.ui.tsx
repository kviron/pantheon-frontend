import s from './navbar.module.scss'
import {
    ArrowLeftOutlined,
    ArrowRightOutlined,
    BellOutlined,
    DownloadOutlined,
    ProductOutlined,
    SettingOutlined
} from '@ant-design/icons'
import { Badge, Button, Menu, MenuProps, Space, Tooltip } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ThemeSwitcher } from '@/features/themeSwitcher/ui/themeSwitcher.ui.tsx'
import { useEffect, useState } from 'react'
import { AppRoutes } from '@/shared/const/router.ts'
import { routeConfig } from '@/shared/config'
import { useUserStore } from '@/entities/user'
import { tauriService } from '@/shared/services'
import { getRouteSettingsAccount } from '@/pages/settings/routing/routing.utils'

type MenuItem = Required<MenuProps>['items'][number]

export const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [current, setCurrent] = useState(location.pathname ?? AppRoutes.MAIN)

    const { t } = useTranslation('navigate')
    const { user } = useUserStore()

    const handleGoBack = () => {
        navigate(-1)
    }

    const handleGoForward = () => {
        navigate(1)
    }

    const items: MenuItem[] = Object.values(routeConfig)
        .filter(route => route.isMainMenu)
        .map(route => {
            return {
                type: 'item',
                route: route.path,
                key: route.path,
                label: t(`${route.nameKey}`).toUpperCase(),
                children:
                    route.path === '/library'
                        ? [
                              {
                                  label: 'Домашняя страница',
                                  key: route.path,
                                  route: route.path,
                                  icon: <ProductOutlined />
                              },
                              { label: 'Загрузки', key: '/downloads', icon: <DownloadOutlined /> }
                          ]
                        : undefined
            }
        })

    if (user && routeConfig.profile.path) {
        const profileItem: MenuItem = {
            type: 'item',
            key: routeConfig.profile.path,
            label: user.email.toUpperCase()
        }
        items.push(profileItem)
    }

    const onClick: MenuProps['onClick'] = e => {
        navigate(e.key)
        setCurrent(e.key)
    }

    useEffect(() => {
        if (current !== location.pathname) {
            setCurrent(location.pathname)
        }
    }, [current, location.pathname])

    return (
        <div className={s.wrapper}>
            <div className={s.arrows}>
                <Button
                    icon={<ArrowLeftOutlined />}
                    type={'text'}
                    onClick={handleGoBack}
                ></Button>
                <Button
                    icon={<ArrowRightOutlined />}
                    type={'text'}
                    onClick={handleGoForward}
                ></Button>
            </div>
            <div className={s.menu}>
                <Menu
                    mode='horizontal'
                    triggerSubMenuAction={'hover'}
                    onClick={onClick}
                    items={items}
                />
            </div>
            <Space>
                <Tooltip
                    placement='bottom'
                    title={'Уведомления'}
                >
                    <Badge
                        count={5}
                        size={'small'}
                    >
                        <Button
                            type={'text'}
                            icon={<BellOutlined />}
                        />
                    </Badge>
                </Tooltip>
                <Tooltip
                    placement='bottom'
                    title={'Переключение темы'}
                >
                    <span>
                        <ThemeSwitcher />
                    </span>
                </Tooltip>
                <Tooltip
                    placement='bottom'
                    title={t('Settings')}
                >
                    <Button
                        type={'text'}
                        onClick={() =>
                            tauriService.openNewWindow({
                                path: getRouteSettingsAccount(),
                                title: t(AppRoutes.SETTINGS)
                            })
                        }
                        icon={<SettingOutlined />}
                    />
                </Tooltip>
            </Space>
        </div>
    )
}
