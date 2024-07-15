import { Stock } from "../entities/Stock";
import { Id } from "../entities/types/Id";

export interface IStockRepository {
    findById: (id: Id) => Promise<Stock>
    update: (stock: Stock) => Promise<void>
}