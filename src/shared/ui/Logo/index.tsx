import { Wrapper } from './logo.styled.tsx'
import { Typography } from 'antd'

const { Title } = Typography

type LogoProps = {
    size?: 'small'
    textTransform?: 'uppercase' | 'lowercase'
}

const logoText = 'Pantheon'

export const Logo = (props: LogoProps) => {
    const { size = 'small', textTransform = 'uppercase', ...rest } = props

    return (
        <Wrapper>
            {size === 'small' && <span>{logoText}</span>}
            {size === 'large' && <Title>{logoText}</Title>}
        </Wrapper>
    )
}
