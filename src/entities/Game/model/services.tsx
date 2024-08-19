import { $api, ApiService } from '@/shared/api/api.ts';
import { Game } from '@/entities/Game';

class GameService extends ApiService {
    buildQueryParams() {}

    getGames() {
        return this.client.get<Game[]>(this.baseURL);
    }

    getGameById(gameId: UUID) {
        return this.client.get<Game>(this.baseURL + `/${gameId}`);
    }
}

export const gameService = new GameService('/games', $api);
