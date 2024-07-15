import { History } from "../entities/History";

export interface IHistoryRepository {
    save(history: History): Promise<void>
    getAll(): Promise<History[]>
}