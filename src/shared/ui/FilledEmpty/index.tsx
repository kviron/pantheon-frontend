import { EmptyProps } from 'antd'
import { StyledEmpty } from './controls.tsx'

export const FilledEmpty = (props: EmptyProps) => {
    return (
        <StyledEmpty
            description={'Здесь ничего нет'}
            {...props}
        />
    )
}
