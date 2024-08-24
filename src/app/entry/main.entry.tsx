import { Routes } from 'react-router'
import { MainLayout } from '@/shared/layouts/main'
import { Route } from 'react-router-dom'
import { routeConfig } from '@/shared/config'

export const MainEntry = () => {
    return (
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
    )
}
