import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { HTMLAttributes } from 'react';
import { GameListItemFormat } from './index.tsx';

type WrapperProps = HTMLAttributes<HTMLDivElement> & {
    background?: string;
    format: GameListItemFormat;
};

const getItemAspectRation = (format: GameListItemFormat) => {
    switch (format) {
        case GameListItemFormat.Column:
            return '2 / 3';
        case GameListItemFormat.Row:
            return '16 / 7';
    }
};

export const Wrapper = styled.div<WrapperProps>(
    ({ background, format }) => css`
        width: 100%;
        display: flex;
        aspect-ratio: ${getItemAspectRation(format)};

        background-image: url(${background});
        background-size: cover;
        background-repeat: no-repeat;
    `,
);
