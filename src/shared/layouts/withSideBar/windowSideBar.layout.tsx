import { Layout } from 'antd'
import { Wrapper } from './windowSideBar.styled.tsx'
import { ReactNode } from 'react'

const { Sider } = Layout

export type WindowSideBarLayoutProps = {
    sidebar: ReactNode
    children: any
}

export const WindowSideBarLayout = ({ sidebar, children }: WindowSideBarLayoutProps) => {
    return (
        <Layout>
            <Sider>{sidebar}</Sider>
            <Wrapper>{children}</Wrapper>
        </Layout>
    )
}
