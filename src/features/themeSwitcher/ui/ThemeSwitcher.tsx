import { useTheme } from '@/shared/hooks/useTheme.ts';
import { Button } from 'antd';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';

export type ThemeSwitcherProps = {
    size?: SizeType;
};

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const { toggleTheme, theme } = useTheme();
    const { size } = props;

    const onToggleHandler = () => {
        toggleTheme();
    };

    return (
        <Button
            onClick={onToggleHandler}
            icon={theme === 'dark' ? <MoonOutlined /> : <SunOutlined />}
            size={size}
            type={'text'}
        />
    );
};
