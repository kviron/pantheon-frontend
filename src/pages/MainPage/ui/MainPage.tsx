import { GameList } from '@/entities/Game/ui/GameList';
import { useQuery } from '@tanstack/react-query';
import { gameService } from '@/entities/Game';

const MainPage = () => {
    const {
        data: games,
        isLoading,
        isFetching,
    } = useQuery({
        queryKey: ['games'],
        queryFn: () => gameService.getGames(),
        select: data => data.data,
        staleTime: 1000,
    });

    return (
        <div>
            <GameList
                games={games}
                isLoading={isLoading}
                isFetching={isFetching}
            />
        </div>
    );
};

export default MainPage;
