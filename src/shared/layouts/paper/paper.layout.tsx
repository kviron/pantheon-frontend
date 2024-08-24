import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

export const PaperLayout = () => {
    return (
        <Layout>
            <Layout.Content style={{ padding: '20px' }}>
                <Outlet />
            </Layout.Content>
        </Layout>
    );
};
