import Cookies from 'js-cookie'

export enum ETokens {
    ACCESS_TOKEN = 'access_token',
    REFRESH_TOKEN = 'refresh_token'
}

class AuthTokenService {
    getAccessToken() {
        const accessToken = Cookies.get(ETokens.ACCESS_TOKEN)
        return accessToken || null
    }

    saveAccessToken(token: string) {
        Cookies.set(ETokens.ACCESS_TOKEN, token, {
            domain: 'localhost',
            sameSite: 'strict',
            expires: 1
        })
    }

    removeAccessToken() {
        Cookies.remove(ETokens.ACCESS_TOKEN)
    }
}

export const authTokenService = new AuthTokenService()
