import { ReactNode } from 'react';
import { Spin } from 'antd';

type ShowProps = {
    children: ReactNode;
    fallback?: Nullable<ReactNode>;
    isLoading?: boolean;
    when: boolean;
};

export const Show = (props: ShowProps) => {
    const { children, when, fallback = null, isLoading = false } = props;

    if (isLoading) {
        return (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Spin />
            </div>
        );
    }

    return !when ? fallback : children;
};
