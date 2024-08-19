import { create } from 'zustand';
import { Game } from '@/entities/Game';

export type LibraryState = {
    isInit: boolean;
    selectedGame: Nullable<Game>;
};

export type LibraryActions = {
    setSelectGame: (game: Game) => void;
    setInit: (init: boolean) => void;
    reset: () => void;
};

export type LibraryStore = LibraryState & LibraryActions;

export const defaultInitState: LibraryState = {
    isInit: false,
    selectedGame: null,
};

const useLibraryStore = create<LibraryStore>(set => ({
    ...defaultInitState,
    setSelectGame: game => set(() => ({ selectedGame: game })),
    setInit: init => set(() => ({ isInit: init })),
    reset: () => set(defaultInitState),
}));

export { useLibraryStore };
