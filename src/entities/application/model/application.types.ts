import { Entity, Genre } from '@/shared/types/entity'
import { AppType, FileImage, OS } from '@/shared/types/common'

export interface ApplicationCommon extends Entity {
    /** Release date */
    releaseDate: string
    /** Release name */
    name: string
    /** Type app */
    appType: AppType
    /** description app */
    description: Nullable<string>
    /** Size app in kb */
    size: Nullable<number>
    /** Does the app support mods */
    isModding: boolean
    /** Icon app */
    icon: Nullable<FileImage>
    /** Logo app */
    logo: Nullable<FileImage>
    /** banner app */
    gridImage: Nullable<FileImage>
    /** Banner app */
    banner: Nullable<FileImage>
    /** Gallery app */
    gallery: FileImage[]
    /** Developer app */
    developer: Nullable<string>
    /** Steam id app */
    steamId: Nullable<string>
    /** Rating app */
    rating: number
    /** Минимальные системные требования */
    minimalRequirements: ApplicationSystemRequirements
    /** Рекомендуемые  системные требования */
    recommendedRequirements: ApplicationSystemRequirements
    /** Содержит ли контент 18+ */
    isAdult: boolean
    /** Издатель */
    publisher: Nullable<string>
    /** Жанр игры */
    genre: Genre[]
}

export interface ApplicationSystemRequirements {
    /** Процессор */
    cpu: Nullable<string>
    /** Видеокарта */
    gpu: Nullable<string>
    /** Операционная система */
    os: OS
    /** Оперативная память */
    ram: Nullable<string>
    /** Размер на диске */
    size: Nullable<string>
    /** Дополнительно */
    addition: Nullable<string>
}

export type Application = ApplicationCommon
