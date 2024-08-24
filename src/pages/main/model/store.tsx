import { create } from 'zustand';
import { Game } from '@/entities/Game';
import { $api } from '@/shared/api/api.ts';

export type MainState = {
    loading: boolean;
    isInit: boolean;
    games: Game[];
    selectedGame: Nullable<Game>;
};

export type MainActions = {
    setSelectGame: (game: Game) => void;
    setInit: (init: boolean) => void;
    fetchData: () => void;
    reset: () => void;
};

export type MainStore = MainState & MainActions;

export const defaultInitState: MainState = {
    games: [],
    loading: false,
    isInit: false,
    selectedGame: null,
};

const useMainStore = create<MainStore>(set => ({
    ...defaultInitState,
    setSelectGame: game => set(() => ({ selectedGame: game })),
    setInit: init => set(() => ({ isInit: init })),
    fetchData: async () => {
        set({ loading: true }); // Начало загрузки данных
        try {
            const response = await $api.get('/games');
            set({ games: response.data, loading: false }); // Успешное получение данных
        } catch (error) {
            set({ loading: false }); // Обработка ошибки
        }
    },
    // Действие для сброса состояния
    reset: () => set(defaultInitState),
}));

export { useMainStore };
