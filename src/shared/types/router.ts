import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/entities/User';
import { AppRoutes } from '@/shared/const/router.ts';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    isMainMenu: boolean;
    roles?: UserRole[];
    nameKey: AppRoutes;
};
