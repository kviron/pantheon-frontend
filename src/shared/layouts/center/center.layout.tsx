import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import { Wrapper } from './center.styled.tsx'

export const CenterLayout = () => {
    return (
        <Layout>
            <Wrapper>
                <Outlet />
            </Wrapper>
        </Layout>
    )
}
