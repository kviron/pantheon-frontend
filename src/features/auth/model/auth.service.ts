import { $api } from '@/shared/api/api.ts'
import { AuthForm } from './auth.types.ts'
import { authTokenService } from './auth.token.service'
import { AxiosResponse } from 'axios'
import { User } from '@/entities/User/model/user.types.ts'

class AuthService {
    isAuth: boolean = false

    async register(data: any) {
        const response = await $api.post(`/auth/register`, data)

        if (response.data.accessToken) authTokenService.saveAccessToken(response.data.accessToken)

        this.isAuth = true

        return response
    }

    async login(data: AuthForm): Promise<AxiosResponse<{ user: User; accessToken: string }>> {
        const response = await $api.post(`/auth/login`, data)

        if (response.data.accessToken) authTokenService.saveAccessToken(response.data.accessToken)

        this.isAuth = true

        return response
    }

    async getNewTokens() {
        const response = await $api.post('/auth/login/access-token')

        if (response.data.accessToken) authTokenService.saveAccessToken(response.data.accessToken)

        return response
    }

    async logout() {
        const response = await $api.post<boolean>('/auth/logout')

        if (response.data) authTokenService.removeAccessToken()

        this.isAuth = false

        return response
    }
}

export const authService = new AuthService()
