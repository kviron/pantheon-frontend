import { useCallback, useEffect, useRef, useState } from 'react';

type UseHorizontalResizeProps = {
    minWidth?: number;
    maxWidth?: number;
    initWidth: number;
};

export const useHorizontalResize = <T extends HTMLDivElement = HTMLDivElement>(props: UseHorizontalResizeProps) => {
    const { minWidth = 0, maxWidth = 99999, initWidth } = props;
    const ref = useRef<Nullable<T>>(null);
    const resizerRef = useRef<Nullable<T>>(null);
    const [isResizing, setIsResizing] = useState(false);
    const [width, setWidth] = useState(initWidth);

    const startResizing = useCallback(() => {
        setIsResizing(true);
    }, []);

    const stopResizing = useCallback(() => {
        setIsResizing(false);
    }, []);

    const resize = useCallback(
        (mouseMoveEvent: MouseEvent) => {
            if (isResizing && ref.current) {
                const newWidth = mouseMoveEvent.clientX - ref.current.getBoundingClientRect().left;
                if (newWidth > minWidth && newWidth < maxWidth) {
                    setWidth(newWidth);
                }
                document.body.style.userSelect = 'none';
                document.body.style.cursor = 'col-resize';
            } else {
                document.body.style.userSelect = '';
                document.body.style.cursor = '';
            }
        },
        [isResizing, maxWidth, minWidth],
    );

    useEffect(() => {
        if (resizerRef.current) {
            resizerRef.current.onmousedown = startResizing;
        }
    }, [startResizing, resizerRef]);

    useEffect(() => {
        window.addEventListener('mousemove', resize);
        window.addEventListener('mouseup', stopResizing);

        return () => {
            window.removeEventListener('mousemove', resize);
            window.removeEventListener('mouseup', stopResizing);
        };
    }, [resize, startResizing, stopResizing]);

    return {
        ref,
        resizerRef,
        width,
        isResizing,
        startResizing,
        stopResizing,
    };
};
