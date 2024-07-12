import { Stock } from "../entities/Sotck";
import { Id } from "../entities/types/Id";

export interface IStockRepository {
    get: (id: Id) => Promise<Stock>
    update: (stock: Stock) => Promise<void>
}