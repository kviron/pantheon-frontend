import { MainPage } from '@/pages/MainPage'
import { ProfilePage } from '@/pages/ProfilePage'
import { ForbiddenPage } from '@/pages/ForbiddenPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { LoginPage } from '@/pages/LoginPage'
import { SettingsPage } from '@/pages/SettingsPage'
import { LibraryPage } from '@/pages/LibraryPage'
import {
    AppRoutes,
    getRouteForbidden,
    getRouteMain,
    getRouteProfile,
    getRouteSettings,
    getRouteGames,
    getRouteGameDetails,
    getRouteLibrary,
    getRouteDownLoads,
    getRouteLogin,
    getRouteRegister
} from '@/shared/const/router'
import { AppRoutesProps } from '@/shared/types/router'

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
        nameKey: AppRoutes.MAIN,
        isMainMenu: false
    },
    [AppRoutes.GAMES]: {
        path: getRouteGames(),
        nameKey: AppRoutes.GAMES,
        element: <MainPage />,
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
    [AppRoutes.Downloads]: {
        path: getRouteDownLoads(),
        element: <div></div>,
        isMainMenu: false,
        nameKey: AppRoutes.Downloads
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
        element: <LoginPage />,
        nameKey: AppRoutes.Register,
        isMainMenu: false
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
        nameKey: AppRoutes.NOT_FOUND,
        isMainMenu: false
    }
}
