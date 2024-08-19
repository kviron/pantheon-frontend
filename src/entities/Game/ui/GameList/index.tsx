import { Game, GameListItem } from '@/entities/Game';
import { Wrapper } from './controls.tsx';
import { GameListItemFormat } from '@/entities/Game/ui/GameListItem';
import { Skeleton } from 'antd';

type GameListProps = {
    games?: Game[];
    isLoading?: boolean;
    isFetching?: boolean;
};

const GameList = (props: GameListProps) => {
    const { games, isLoading } = props;

    if (isLoading) {
        return (
            <Skeleton
                loading={isLoading}
                active
                avatar
            ></Skeleton>
        );
    }

    return (
        <Wrapper>
            {games?.map(game => (
                <GameListItem
                    key={game.id}
                    game={game}
                    format={GameListItemFormat.Row}
                />
            ))}
        </Wrapper>
    );
};

GameList.Item = GameListItem;

export { GameList };
