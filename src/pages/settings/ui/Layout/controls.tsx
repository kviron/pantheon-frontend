import styled from '@emotion/styled';
import { Layout } from 'antd';
import { css } from '@emotion/react';
import { scrollBox } from '@/shared/styles';

export const SettingsContent = styled(Layout.Content)(
    ({ theme }) => css`
        width: 100%;
        max-width: 800px;
        height: calc(100vh - ${theme.components?.Layout?.headerHeight}px - 2rem);

        position: relative;
        margin: 1rem auto;
        padding: 1rem;

        background-color: ${theme.token?.colorBgContainer};
        overflow: hidden;
        border-radius: 1rem;

        ${scrollBox}
    `,
);
