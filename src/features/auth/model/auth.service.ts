import { $api } from '@/shared/api/api'
import { AuthForm } from './auth.types'
import { authTokenService } from './auth.token.service'
import { AxiosResponse } from 'axios'
import { User } from '@/entities/user'

class AuthService {
    getIsAuthenticated() {
        return !!authTokenService.getAccessToken()
    }

    async register(data: any) {
        const response = await $api.post(`/auth/register`, data)

        if (response.data.accessToken) authTokenService.saveAccessToken(response.data.accessToken)

        return response
    }

    async login(data: AuthForm): Promise<AxiosResponse<{ user: User; accessToken: string }>> {
        const response = await $api.post(`/auth/login`, data)

        if (response.data.accessToken) authTokenService.saveAccessToken(response.data.accessToken)

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

        return response
    }
}

export const authService = new AuthService()
