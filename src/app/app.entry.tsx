import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { routeConfig } from '@/shared/config'
import { MainLayout } from '@/shared/layouts/main'
import { ErrorPage } from '@/pages/error'
import { CenterLayout } from '@/shared/layouts/center'
import { WindowLayout } from '@/shared/layouts/window'
import { EAppRoutesType } from '@/shared/types/router.ts'
import { renderRoute } from '@/shared/utils'

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path='/'
                element={<MainLayout />}
                errorElement={<ErrorPage />}
            >
                {Object.values(routeConfig)
                    .filter(route => route.section === EAppRoutesType.Front)
                    .map(route => renderRoute(route))}
            </Route>
            <Route
                element={<WindowLayout />}
                errorElement={<ErrorPage />}
            >
                {Object.values(routeConfig)
                    .filter(route => route.section === EAppRoutesType.Window)
                    .map(route => renderRoute(route, true))}
            </Route>
            <Route
                element={<CenterLayout />}
                errorElement={<ErrorPage />}
            >
                {Object.values(routeConfig)
                    .filter(route => route.section === EAppRoutesType.Auth)
                    .map(route => renderRoute(route))}
            </Route>
        </>
    )
)

export const AppEntry = () => {
    return (
        <RouterProvider
            router={router}
            future={{ v7_startTransition: true }}
        />
    )
}
