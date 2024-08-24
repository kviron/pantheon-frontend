import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Wrapper = styled.div(
    () => css`
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    `,
);
