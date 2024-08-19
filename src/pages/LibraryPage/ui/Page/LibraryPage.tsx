import { Layout } from 'antd';
import { LibraryPageSidebar } from '../Sidebar';
import { LibraryPageContent } from '@/pages/LibraryPage/ui/Content';
import { useQuery } from '@tanstack/react-query';
import { gameService } from '@/entities/Game';

export const LibraryPage = () => {
    const { data, isFetching, isLoading } = useQuery({
        queryKey: ['games', 'library'],
        queryFn: () => gameService.getGames(),
        select: data => data.data,
    });

    return (
        <Layout>
            <LibraryPageSidebar
                games={data}
                isLoading={isLoading}
                isFetching={isFetching}
            />
            <LibraryPageContent />
        </Layout>
    );
};
