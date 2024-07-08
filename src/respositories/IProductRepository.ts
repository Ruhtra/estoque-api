import { Product } from "../entities/Product";

export interface IProductRepository {
    save: (product: Product) => Promise<void>
    update: (product: Product) => Promise<void>
}