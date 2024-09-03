import { Outlet } from 'react-router-dom'
import s from './main.module.scss'
import { Layout, theme } from 'antd'
import { Navbar } from '@/widgets/navbar'
import { TitleBar } from '@/shared/ui/titleBar'

export const MainLayout = () => {
    const {
        token: { colorBgContainer }
    } = theme.useToken()

    return (
        <Layout>
            <TitleBar />
            <Layout.Header
                style={{ backgroundColor: colorBgContainer }}
                className={s.header}
            >
                <Navbar />
            </Layout.Header>
            <Layout.Content className={s.content}>
                <Outlet />
            </Layout.Content>
        </Layout>
    )
}
