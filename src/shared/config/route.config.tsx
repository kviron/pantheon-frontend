import { MainPage } from '@/pages/main'
import { ProfilePage } from '@/pages/profile'
import { ForbiddenPage } from '@/pages/forbidden'
import { LoginPage } from '@/pages/login'
import { SettingsPage } from '@/pages/settings'
import { LibraryPage } from '@/pages/library'
import {
    AppRoutes,
    getRouteDownLoads,
    getRouteForbidden,
    getRouteGameDetails,
    getRouteLibrary,
    getRouteLogin,
    getRouteMain,
    getRouteProfile,
    getRouteRegister,
    getRouteSettings
} from '@/shared/const/router'
import { AppRoutesProps } from '@/shared/types/router'
import { RegisterPage } from '@/pages/register'

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
        nameKey: AppRoutes.MAIN,
        isMainMenu: true
    },
    [AppRoutes.LIBRARY]: {
        path: getRouteLibrary(),
        nameKey: AppRoutes.LIBRARY,
        element: <LibraryPage />,
        isMainMenu: true
    },
    [AppRoutes.SETTINGS]: {
        path: getRouteSettings(),
        element: <SettingsPage />,
        isMainMenu: false,
        nameKey: AppRoutes.SETTINGS
    },
    [AppRoutes.DOWNLOADS]: {
        path: getRouteDownLoads(),
        element: <div></div>,
        isMainMenu: false,
        nameKey: AppRoutes.DOWNLOADS
    },
    [AppRoutes.PROFILE]: {
        path: getRouteProfile(':id'),
        element: <ProfilePage />,
        nameKey: AppRoutes.PROFILE,
        authOnly: true,
        isMainMenu: false
    },
    [AppRoutes.GAME_DETAILS]: {
        path: getRouteGameDetails(':id'),
        nameKey: AppRoutes.GAME_DETAILS,
        element: <div></div>,
        isMainMenu: false
    },
    [AppRoutes.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
        nameKey: AppRoutes.FORBIDDEN,
        isMainMenu: false
    },
    [AppRoutes.Login]: {
        path: getRouteLogin(),
        element: <LoginPage />,
        nameKey: AppRoutes.Login,
        isMainMenu: false
    },
    [AppRoutes.Register]: {
        path: getRouteRegister(),
        element: <RegisterPage />,
        nameKey: AppRoutes.Register,
        isMainMenu: false
    }
}
