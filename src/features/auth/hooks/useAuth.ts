import { authService } from '../model/auth.service'
import { authTokenService } from '../model/auth.token.service'
import { useMutation } from '@tanstack/react-query'
import { AuthForm } from '@/features/auth/model/auth.types.ts'
import { getRouteMain } from '@/shared/const/router.ts'
import { useNavigate } from 'react-router-dom'

export const useAuth = () => {
    const isAuthenticated = authService.isAuth
    const navigate = useNavigate()

    const {
        mutate: onAuth,
        data,
        isPending
    } = useMutation({
        mutationKey: ['auth'],
        mutationFn: (data: AuthForm) => authService.login(data),
        onSuccess() {
            navigate(getRouteMain())
        }
    })

    const currentUser = data?.data.user

    return {
        onAuth,
        isInit: isPending,
        currentUser,
        isAuthenticated,
        authService,
        authTokenService
    }
}
