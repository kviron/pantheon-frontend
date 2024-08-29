import { Typography } from 'antd'

export const Logo = () => {
    return (
        <Typography.Title
            style={{
                fontFamily: '"Audiowide", sans-serif',
                letterSpacing: '.172em',
                userSelect: 'none',
                textWrap: 'nowrap'
            }}
        >
            {'PANTHEON'}
        </Typography.Title>
    )
}
