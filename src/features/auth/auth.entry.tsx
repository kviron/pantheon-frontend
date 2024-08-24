import { Routes } from 'react-router'
import { CenterLayout } from '@/shared/layouts/center'
import { Route } from 'react-router-dom'
import { routeConfig } from '@/shared/config'

export const AuthEntry = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={<CenterLayout />}
            >
                <Route
                    path={routeConfig.login.path}
                    element={routeConfig.login.element}
                />
                <Route
                    path={routeConfig.register.path}
                    element={routeConfig.register.element}
                />
            </Route>
        </Routes>
    )
}
