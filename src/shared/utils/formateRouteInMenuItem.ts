import { AppRoutesProps } from '@/shared/types/router.ts'
import { MenuProps } from 'antd'
import { uuidv4 } from '@/shared/lib/uuid'
import { TFunction } from 'i18next'

type MenuItem = Required<MenuProps>['items'][number]

export const formatRouteInMenuItem = <Key extends string>(
    route: AppRoutesProps<Key>,
    t: TFunction<'settings', undefined>,
    params: Partial<MenuItem> = {}
): MenuItem => {
    return {
        type: 'item',
        route: route.path,
        key: route.path || uuidv4(),
        icon: route.icon,
        label: t(`${route.nameKey}`),
        ...params
    }
}
