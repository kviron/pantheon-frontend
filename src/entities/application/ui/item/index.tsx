import { Wrapper } from './controls.tsx'
import { Application } from '../../model/application.types'

export enum ApplicationListItemFormat {
    Column = 'column',
    Row = 'row'
}

type GameListItemProps = {
    application: Application
    format?: ApplicationListItemFormat
}

export const ApplicationListItem = (props: GameListItemProps) => {
    const { application, format = ApplicationListItemFormat.Column } = props

    const urlBackground =
        format === ApplicationListItemFormat.Row ? application.banner?.path : application.gridImage?.path

    return (
        <Wrapper
            background={urlBackground}
            format={format}
        ></Wrapper>
    )
}
