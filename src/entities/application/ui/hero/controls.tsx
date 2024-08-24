import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FileImage } from '@/shared/types/common.ts';
import { HTMLAttributes, ImgHTMLAttributes } from 'react';
import { Theme } from '@tauri-apps/api/window';

type WrapperProps = HTMLAttributes<HTMLDivElement> & {
    background: Nullable<FileImage>;
};

export const Wrapper = styled.div<WrapperProps>(
    ({ background }) => css`
        position: relative;

        width: 100%;
        min-height: 300px;
        aspect-ratio: 4 / 1;

        background-image: url(${background?.path ?? ''});
        background-size: cover;
    `,
);

type LogoProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> & {
    src?: string | null;
};

export const Logo = styled(({ src = '', ...other }: LogoProps) =>
    src ? (
        <img
            src={src}
            alt={''}
            {...other}
        />
    ) : null,
)`
    position: absolute;
    max-height: 60%;
    max-width: 40%;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    user-select: none;
    cursor: default;
`;

type ToolBarProps = HTMLAttributes<HTMLDivElement> & {
    themeMode: Theme;
};

export const ToolBar = styled.div<ToolBarProps>(
    ({ themeMode }) => css`
        position: absolute;
        display: flex;

        height: 80px;

        bottom: 0;
        right: 0;
        left: 0;

        padding: 0.5rem;

        justify-content: flex-start;
        align-items: center;
        background: ${themeMode === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)'};
        backdrop-filter: blur(10px);
    `,
);
