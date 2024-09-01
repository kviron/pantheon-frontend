import { MainPage } from '@/pages/main'
import { ProfilePage } from '@/pages/profile'
import { ForbiddenPage } from '@/pages/forbidden'
import { LoginPage } from '@/pages/login'
import { SettingsPageEntry } from '@/pages/settings'
import { LibraryPage } from '@/pages/library'
import {
    AppRoutes,
    getRouteDownLoads,
    getRouteForbidden,
    getRouteForgot,
    getRouteLibrary,
    getRouteLogin,
    getRouteMain,
    getRouteProfile,
    getRouteRegister,
    getRouteSettings
} from '@/shared/const/router'
import { AppRoutesProps, EAppRoutesType } from '@/shared/types/router'
import { RegisterPage } from '@/pages/register'
import { ForgotPage } from '@/pages/forgot/ui'
import { authProtector } from '@/features/auth'

export const routeConfig: Record<AppRoutes, AppRoutesProps<AppRoutes>> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
        nameKey: AppRoutes.MAIN,
        isMainMenu: true,
        section: EAppRoutesType.Front
    },
    [AppRoutes.LIBRARY]: {
        path: getRouteLibrary(),
        nameKey: AppRoutes.LIBRARY,
        element: <LibraryPage />,
        isMainMenu: true,
        loader: authProtector,
        section: EAppRoutesType.Front
    },
    [AppRoutes.SETTINGS]: {
        path: getRouteSettings(),
        element: <SettingsPageEntry />,
        isMainMenu: false,
        loader: authProtector,
        nameKey: AppRoutes.SETTINGS,
        section: EAppRoutesType.Window
    },
    [AppRoutes.DOWNLOADS]: {
        path: getRouteDownLoads(),
        element: <div></div>,
        isMainMenu: false,
        loader: authProtector,
        nameKey: AppRoutes.DOWNLOADS,
        section: EAppRoutesType.Front
    },
    [AppRoutes.PROFILE]: {
        path: getRouteProfile(':id'),
        element: <ProfilePage />,
        nameKey: AppRoutes.PROFILE,
        loader: authProtector,
        isMainMenu: false,
        section: EAppRoutesType.Front
    },
    [AppRoutes.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
        nameKey: AppRoutes.FORBIDDEN,
        isMainMenu: false,
        section: EAppRoutesType.Error
    },
    [AppRoutes.Login]: {
        path: getRouteLogin(),
        element: <LoginPage />,
        nameKey: AppRoutes.Login,
        isMainMenu: false,
        section: EAppRoutesType.Auth
    },
    [AppRoutes.Register]: {
        path: getRouteRegister(),
        element: <RegisterPage />,
        nameKey: AppRoutes.Register,
        isMainMenu: false,
        section: EAppRoutesType.Auth
    },
    [AppRoutes.Forgot]: {
        path: getRouteForgot(),
        element: <ForgotPage />,
        nameKey: AppRoutes.Forgot,
        isMainMenu: false,
        section: EAppRoutesType.Auth
    }
}
