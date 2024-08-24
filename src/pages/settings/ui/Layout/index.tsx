import { Layout } from 'antd';
import { SettingsContent } from '@/pages/SettingsPage/ui/Layout/controls.tsx';
import { ReactNode } from 'react';

type SettingLayoutProps = {
    children: ReactNode;
};

export const SettingLayout = (props: SettingLayoutProps) => {
    const { children } = props;
    return (
        <Layout>
            <SettingsContent>{children}</SettingsContent>
        </Layout>
    );
};
