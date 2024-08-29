import { authService } from '../model/auth.service'
import { authTokenService } from '../model/auth.token.service'
import { useMutation } from '@tanstack/react-query'
import { AuthLoginForm, AuthRegisterForm } from '@/features/auth'
import { getRouteMain } from '@/shared/const/router.ts'
import { useNavigate } from 'react-router-dom'

export const useAuth = () => {
    const isAuthenticated = authService.getIsAuthenticated()
    const navigate = useNavigate()

    const {
        mutate: onLogin,
        data: dataLogin,
        isPending: isLoginPending
    } = useMutation({
        mutationKey: ['login'],
        mutationFn: (data: AuthLoginForm) => authService.login(data),
        onSuccess() {
            navigate(getRouteMain())
        }
    })

    const {
        mutate: onRegister,
        data: dataRegister,
        isPending: isRegisterPending
    } = useMutation({
        mutationKey: ['register'],
        mutationFn: (data: AuthRegisterForm) => authService.register(data),
        onSuccess() {
            navigate(getRouteMain())
        }
    })

    return {
        dataLogin,
        dataRegister,
        onLogin,
        onRegister,
        isLoginPending,
        isRegisterPending,
        isAuthenticated,
        authService,
        authTokenService
    }
}
