export enum ELocalStorageKey {
    THEME = 'theme',
    USER = 'user',
}

class LocalStorageService {
    get(key: ELocalStorageKey) {
        return window.localStorage.getItem(key);
    }

    set(key: ELocalStorageKey, value: any) {
        return window.localStorage.setItem(key, value);
    }
}

export const localStorageService = new LocalStorageService();