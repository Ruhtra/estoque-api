import { Product } from "../entities/Product";

export interface IProductRepository {
    save: (product: Product) => Promise<void>
    findById: (id: string) => Promise<Product>
    getAll: () => Promise<Product[]>
    update: (product: Product) => Promise<void>
}