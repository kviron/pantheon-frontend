import { Menu, MenuProps } from 'antd'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const StyledMenu = styled<MenuProps>(Menu)(
    () => css`
        .ant-menu-item {
            margin-left: 0;
            margin-right: 0;
            width: 100%;
            border-radius: 0;
            user-select: none;
        }
    `
)
