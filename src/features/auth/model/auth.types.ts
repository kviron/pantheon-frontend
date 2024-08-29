import { UserGender } from '@/entities/user/model/user.const'

export type AuthLoginForm = {
    email: string
    password: string
}

export type AuthRegisterForm = {
    email: string
    password: string
    confirm?: string
    nickname: string
    phone: Nullable<string>
    gender: UserGender
}
