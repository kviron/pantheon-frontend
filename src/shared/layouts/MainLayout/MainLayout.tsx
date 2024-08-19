import { Outlet } from 'react-router-dom'
import s from './MainLayout.module.scss'
import { Layout, theme } from 'antd'
import { Navbar } from '@/widgets/Navbar'

export const MainLayout = () => {
    const {
        token: { colorBgContainer }
    } = theme.useToken()

    return (
        <Layout>
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
