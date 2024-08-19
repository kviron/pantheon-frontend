export type SortOrder = 'asc' | 'desc';

export enum AppType {
    Game = 'game',
}

export interface FileDescription {
    path: string;
}

export interface FileImage extends FileDescription {
    /** Alt текст картинки */
    alt: Nullable<string>;
    /** Title текст картинки */
    title: Nullable<string>;
}

export enum OS {
    Windows = 'Windows',
    MacOS = 'MacOS',
    linux = 'Linux',
}
