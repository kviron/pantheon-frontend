import { Layout } from 'antd'
import { Wrapper, WrapperSider } from './windowSideBar.styled.tsx'
import { ReactNode } from 'react'

export type WindowSideBarLayoutProps = {
    sidebar: ReactNode
    children: any
}

export const WindowSideBarLayout = ({ sidebar, children }: WindowSideBarLayoutProps) => {
    return (
        <Layout>
            <WrapperSider>{sidebar}</WrapperSider>
            <Wrapper>{children}</Wrapper>
        </Layout>
    )
}
