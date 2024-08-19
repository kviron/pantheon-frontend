import { routeConfig } from '../config/routeConfig'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { ErrorPage } from '@/pages/ErrorPage'
import { Suspense } from 'react'
import { CenterLayout } from '@/shared/layouts/CenterLayout'

const AppRouter = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route
                path='/'
                errorElement={<ErrorPage />}
                element={<MainLayout />}
            >
                {Object.values(routeConfig).map(route => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={
                            route.path === '/login' || route.path === '/register' ? (
                                <CenterLayout>
                                    <Suspense fallback={<div>загрузка...</div>}>{route.element}</Suspense>
                                </CenterLayout>
                            ) : (
                                <Suspense fallback={<div>загрузка...</div>}>{route.element}</Suspense>
                            )
                        }
                    />
                ))}
            </Route>
        )
    )

    return (
        <RouterProvider
            router={router}
            fallbackElement={<p>Loading...</p>}
        />
    )
}

export default AppRouter
