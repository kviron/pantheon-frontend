import { routeConfig } from '@/app/providers/RouterProvider/config/routeConfig.tsx'
import { Routes } from 'react-router'
import { Route, useNavigate } from 'react-router-dom'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { useAuth } from '@/features/auth'
import { AuthEntry } from '@/features/auth/ui/auth.entry.tsx'
import { getRouteLogin } from '@/shared/const/router.ts'
import { useEffect } from 'react'

const App = () => {
    const { isAuthenticated } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuthenticated) {
            navigate(getRouteLogin())
        }
    }, [isAuthenticated, navigate])

    if (!isAuthenticated) {
        return <AuthEntry />
    }

    return (
        <>
            <Routes>
                {Object.values(routeConfig)
                    .filter(route => route.isMainMenu)
                    .map(route => {
                        return (
                            <Route
                                key={route.path}
                                path='/'
                                element={<MainLayout />}
                            >
                                <Route
                                    path={route.path}
                                    element={route.element}
                                />
                            </Route>
                        )
                    })}
            </Routes>
        </>
    )
}

export default App
