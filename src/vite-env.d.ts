/// <reference types="vite/client" />
import { PantheonTheme } from '@/app/providers/ThemeProvider/config/theme.ts';

declare module '@emotion/react' {
    interface Theme extends PantheonTheme {}
}

declare module '@emotion/styled' {
    interface Theme extends PantheonTheme {}
}
