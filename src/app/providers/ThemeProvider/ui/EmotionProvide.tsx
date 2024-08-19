import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { theme } from 'antd';

const { useToken } = theme;

type EmotionProviderProps = {
    children: React.ReactNode;
};

export const EmotionProvider = ({ children }: EmotionProviderProps) => {
    const { token } = useToken();

    return <EmotionThemeProvider theme={token}>{children}</EmotionThemeProvider>;
};
