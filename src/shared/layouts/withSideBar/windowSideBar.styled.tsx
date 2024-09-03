import styled from '@emotion/styled'
import { Layout } from 'antd'
import { css } from '@emotion/react'

const { Content, Sider } = Layout

export const Wrapper = styled(Content)(
    ({ theme }) => css`
        width: 100vw;
        height: 100vh;
        padding-top: ${theme.titleBarHeight}px;

        display: flex;
        flex-direction: column;
    `
)

export const WrapperSider = styled(Sider)(
    ({ theme }) => css`
        padding-top: ${theme.titleBarHeight}px;
    `
)
