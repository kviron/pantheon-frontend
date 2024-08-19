export interface Entity {
    /** Унификатор */
    id: UUID
    /** Дата добавления */
    createdAt: string
    /** Дата обновления */
    updatedAt: string
}

export interface Genre extends Entity {}
