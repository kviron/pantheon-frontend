import styled from '@emotion/styled'
import { HTMLAttributes } from 'react'
import { css } from '@emotion/react'

type WrapperTitleBarProps = HTMLAttributes<HTMLDivElement> & {
    variant: 'ghost' | 'base'
}

export const WrapperTitleBar = styled(({ variant, ...props }: WrapperTitleBarProps) => (
    <div
        data-tauri-drag-region={true}
        {...props}
    />
))(
    ({ theme, variant }) => css`
        display: flex;
        justify-content: ${variant === 'ghost' ? 'flex-end' : 'space-between'};
        align-items: center;
        height: ${theme.titleBarHeight}px;
        background-color: ${variant === 'ghost' ? 'transparent' : theme.colorBgContainer};
        color: white;
        position: ${variant === 'ghost' ? 'fixed' : 'relative'};
        padding-left: 1rem;
        z-index: 100;
        width: 100%;

        button {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
        }
    `
)
