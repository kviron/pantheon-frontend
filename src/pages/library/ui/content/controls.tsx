import styled from '@emotion/styled';
import { Layout } from 'antd';
import { css } from '@emotion/react';

export const LayoutLibraryPageContent = styled(Layout.Content)(
    ({ theme }) => css`
        position: relative;
        height: calc(100vh - ${theme.Layout?.headerHeight}px);
        overflow-x: hidden;
        overflow-y: auto;
    `,
);
