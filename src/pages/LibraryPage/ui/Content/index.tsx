import { useLibraryStore } from '@/pages/LibraryPage/model/store.tsx';
import { LayoutLibraryPageContent } from '@/pages/LibraryPage/ui/Content/controls.tsx';
import { GameHero } from '@/entities/Game';
import { FilledEmpty } from '@/shared/ui/FilledEmpty';

export const LibraryPageContent = () => {
    const { selectedGame } = useLibraryStore();

    return (
        <LayoutLibraryPageContent>
            {selectedGame ? <GameHero game={selectedGame} /> : <FilledEmpty />}
        </LayoutLibraryPageContent>
    );
};
