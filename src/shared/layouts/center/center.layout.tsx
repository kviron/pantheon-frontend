import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import { Wrapper } from './center.styled.tsx'
import { TitleBar } from '@/shared/ui/titleBar'

export const CenterLayout = () => {
    return (
        <Layout>
            <TitleBar variant={'ghost'} />
            <Wrapper>
                <Outlet />
            </Wrapper>
        </Layout>
    )
}
