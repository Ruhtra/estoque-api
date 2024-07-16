import { Product } from "../entities/Product";
import { Id } from "../entities/types/Id";

export interface IProductRepository {
    save: (product: Product) => Promise<void>
    findById: (id: Id) => Promise<Product>
    getAll: () => Promise<Product[]>
    update: (product: Product) => Promise<void>
    delete: (id: Id) => Promise<void>
}