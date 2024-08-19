import { UserGender, UserRole } from './user.const.ts'
import { Entity } from '@/shared/types/entity.ts'

export interface User extends Entity {
    email: string
    name?: string
    nikName?: string
    phoneNumber?: string
    gender?: UserGender
    age?: number
    roles: UserRole[]
    dateOfBirth?: string
}
