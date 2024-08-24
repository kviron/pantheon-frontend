import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage.ts'
import { Theme } from '@tauri-apps/api/window'
import { ThemeContext, ThemeContextProps } from '@/shared/context/theme.context.ts'
import { FC, useEffect, useMemo, useState } from 'react'
import { ConfigProvider } from 'antd'
import { getThemeConfig } from '@/shared/config/theme.config'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { theme } from 'antd'

type ThemeProviderProps = {
    initialTheme?: Theme
    children: JSX.Element
}

const { useToken } = theme

type EmotionProviderProps = {
    children: React.ReactNode
}

const EmotionProvider = ({ children }: EmotionProviderProps) => {
    const { token } = useToken()

    return <EmotionThemeProvider theme={token}>{children}</EmotionThemeProvider>
}

const fallbackTheme = window.localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme

export const ThemeProvider: FC<ThemeProviderProps> = props => {
    const [isThemeInited, setThemeInited] = useState<boolean>(false)
    const [theme, setTheme] = useState<Theme>(props.initialTheme || fallbackTheme || 'light')

    const defaultProps: ThemeContextProps = {
        theme,
        setTheme
    }

    if (!isThemeInited && props.initialTheme) {
        setThemeInited(true)
        setTheme(props.initialTheme)
    }

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
    }, [theme])

    const themeConfig = useMemo(() => {
        return getThemeConfig(theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            <ConfigProvider theme={themeConfig}>
                <EmotionProvider>{props.children}</EmotionProvider>
            </ConfigProvider>
        </ThemeContext.Provider>
    )
}
