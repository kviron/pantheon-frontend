import { RouteProps } from 'react-router-dom'
import { UserRole } from '@/entities/user'
import { ReactNode } from 'react'

export enum EAppRoutesType {
    Front = 'front',
    Auth = 'auth',
    Admin = 'admin',
    Error = 'error',
    Window = 'window'
}

export type AppRoutesProps<Key extends string> = RouteProps & {
    isMainMenu: boolean
    roles?: UserRole[]
    nameKey: Key
    section: EAppRoutesType
    icon?: ReactNode
}
