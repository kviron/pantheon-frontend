import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios'
import { errorCatch } from '@/shared/api/error.ts'
import { authService } from '@/features/auth'
import { authTokenService } from '@/features/auth/model/auth.token.service.ts'

const options: CreateAxiosDefaults = {
    baseURL: __API__,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
}

export const $api = axios.create(options)
export const $apiAuth = axios.create(options)

$apiAuth.interceptors.request.use(config => {
    const accessToken = authTokenService.getAccessToken()

    if (config?.headers && accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
})

$apiAuth.interceptors.response.use(
    config => config,
    async error => {
        const originalRequest = error.config

        if (
            (error?.response?.status === 401 ||
                errorCatch(error) === 'jwt expired' ||
                errorCatch(error) === 'jwt must be provided') &&
            error.config &&
            !error.config._isRetry
        ) {
            originalRequest._isRetry = true

            try {
                await authService.getNewTokens()
                return $apiAuth.request(originalRequest)
            } catch (e) {
                if (errorCatch(error) === 'jwt expired') authTokenService.removeAccessToken()
            }
        }

        throw error
    }
)

class ApiService {
    baseURL: string = ''
    client: AxiosInstance

    constructor(baseURL: string, client: AxiosInstance) {
        this.baseURL = baseURL
        this.client = client
    }
}

export { ApiService }
