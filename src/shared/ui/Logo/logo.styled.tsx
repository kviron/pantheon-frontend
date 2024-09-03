import { Typography } from 'antd'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Wrapper = styled(Typography)(
    () => css`
        font-family: 'Audiowide', sans-serif;
        user-select: none;
        text-wrap: none;
    `
)
