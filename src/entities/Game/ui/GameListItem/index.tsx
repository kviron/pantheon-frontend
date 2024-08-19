import { Wrapper } from './controls.tsx';
import { Game } from '@/entities/Game';

export enum GameListItemFormat {
    Column = 'column',
    Row = 'row',
}

type GameListItemProps = {
    game: Game;
    format?: GameListItemFormat;
};

export const GameListItem = (props: GameListItemProps) => {
    const { game, format = GameListItemFormat.Column } = props;

    const urlBackground = format === GameListItemFormat.Row ? game.banner?.path : game.gridImage?.path;

    return (
        <Wrapper
            background={urlBackground}
            format={format}
        ></Wrapper>
    );
};
