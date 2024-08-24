import { useLibraryStore } from '../../model/library.store.tsx'
import { LayoutLibraryPageContent } from './controls.tsx'
import { ApplicationHero } from '@/entities/application'
import { FilledEmpty } from '@/shared/ui/FilledEmpty'

export const LibraryPageContent = () => {
    const { selectedGame } = useLibraryStore()

    return (
        <LayoutLibraryPageContent>
            {selectedGame ? <ApplicationHero application={selectedGame} /> : <FilledEmpty />}
        </LayoutLibraryPageContent>
    )
}
