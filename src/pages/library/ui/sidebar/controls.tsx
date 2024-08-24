import styled from '@emotion/styled'
import Sider from 'antd/es/layout/Sider'
import { css } from '@emotion/react'
import { forwardRef, HTMLAttributes } from 'react'
import { List } from 'antd'
import { ListItemProps } from 'antd/es/list'

export const Sidebar = styled(Sider)({
    transition: 'none',
    position: 'relative',
    overflow: 'hidden',
    height: 'calc(100vh - var(--ant-layout-header-height))'
})

type ResizerProps = HTMLAttributes<HTMLDivElement> & {
    isResizing: boolean
}

const Resizer = styled(
    forwardRef(({ isResizing, ...props }: ResizerProps, ref: any) => (
        <div
            ref={ref}
            {...props}
        />
    ))
)(
    ({ isResizing, theme }) => css`
        width: 5px;
        cursor: col-resize;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 100;

        &:hover {
            background-color: color-mix(in srgb, ${theme.Layout?.siderBg}, #000 ${isResizing ? '20%' : '10%'});
        }
    `
)

export { Resizer }

type ItemProps = ListItemProps &
    React.RefAttributes<HTMLDivElement> & {
        isActive?: boolean
    }

export const Item = styled(({ isActive, ...props }: ItemProps) => <List.Item {...props} />)(
    ({ isActive, theme }) => css`
        padding: 0.5rem !important;
        cursor: pointer;

        background-color: color-mix(in srgb, transparent, ${isActive ? theme.colorPrimary : 'transparent'} 30%);

        &:hover {
            background-color: ${!isActive ? `color-mix(in srgb, transparent, ${theme.colorText} 10%)` : null};
        }
    `
)
