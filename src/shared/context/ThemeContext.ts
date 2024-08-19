import { Theme } from '@tauri-apps/api/window';
import { createContext } from 'react';

export interface ThemeContextProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);
