import { Entity, Genre } from '@/shared/types/entity';
import { AppType, FileImage, OS } from '@/shared/types/common';

export interface GameSystemRequirements {
    /** Процессор */
    cpu: Nullable<string>;
    /** Видеокарта */
    gpu: Nullable<string>;
    /** Операционная система */
    os: OS;
    /** Оперативная память */
    ram: Nullable<string>;
    /** Размер на диске */
    size: Nullable<string>;
    /** Дополнительно */
    addition: Nullable<string>;
}

export interface Game extends Entity {
    /** Описание игры */
    steamId: Nullable<string>;
    /** Описание игры */
    appType: AppType;
    /** Описание игры */
    description: Nullable<string>;
    /** Размер игры в кб */
    size: Nullable<number>;
    /** Поддерживает ли игра моды */
    isModding: boolean;
    /** Содержит ли контент 18+ */
    isAdult: boolean;
    /** Иконка игры */
    icon: Nullable<FileImage>;
    /** Логотип игры */
    logo: Nullable<FileImage>;
    /** Логотип игры */
    gridImage: Nullable<FileImage>;
    /** Логотип игры */
    banner: Nullable<FileImage>;
    /** Галерея изображений */
    gallery: FileImage[];
    /** Разработчик */
    developer: Nullable<string>;
    /** Издатель */
    publisher: Nullable<string>;
    /** Разработчик */
    releaseDate: string;
    /** Рейтинг игры */
    rating: number;
    /** Жанр игры */
    genre: Genre[];
    /** Минимальные системные требования */
    minimalRequirements: GameSystemRequirements;
    /** Рекомендуемые  системные требования */
    recommendedRequirements: GameSystemRequirements;
}
