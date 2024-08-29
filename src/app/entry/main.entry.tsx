import { MainLayout } from '@/shared/layouts/main'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routeConfig } from '@/shared/config'
import { ErrorPage } from '@/pages/error'
import { AppRoutes } from '@/shared/const/router.ts'
import { authProtector } from '@/features/auth'
import { CenterLayout } from '@/shared/layouts/center'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: Object.values(routeConfig)
            .filter(route => route.nameKey !== AppRoutes.Login && route.nameKey !== AppRoutes.Register)
            .map(route => ({
                index: route.nameKey === AppRoutes.MAIN,
                path: route.path,
                element: route.element,
                loader:
                    route.nameKey !== AppRoutes.Login && route.nameKey !== AppRoutes.Register
                        ? authProtector
                        : undefined
            }))
    },
    {
        path: '/' + routeConfig.login.path,
        element: <CenterLayout />,
        children: [
            {
                index: true,
                element: routeConfig.login.element
            }
        ]
    },
    {
        path: '/' + routeConfig.register.path,
        element: <CenterLayout />,
        children: [
            {
                index: true,
                element: routeConfig.register.element
            }
        ]
    }
])

export const MainEntry = () => {
    return <RouterProvider router={router} />
}
