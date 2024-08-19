import { RouteProps } from 'react-router-dom'
import { UserRole } from '@/entities/user'
import { AppRoutes } from '@/shared/const/router'

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
    isMainMenu: boolean
    roles?: UserRole[]
    nameKey: AppRoutes
}
