import { Stock } from "@prisma/client";

export interface IStockRepository {
    update: (stock: Stock) => Promise<void>
}