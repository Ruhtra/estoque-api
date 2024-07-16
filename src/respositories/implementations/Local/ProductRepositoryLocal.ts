import { Product } from "../../../entities/Product";
import { Id } from "../../../entities/types/Id";
import { IProductRepository } from "../../IProductRepository";

export class ProductRepositoryLocal implements IProductRepository {
    private db: Product[] = [
        Product.with({
            id: "6688091774f5609eb87e7e1a",
            // amount: 4,
            name: "tomate",
            // price: 1.53
        })
    ]
    
    async save(product: Product): Promise<void> {
        this.db.push(product)
    }
    async update (product: Product): Promise<void> {
        const idProduct = this.db.findIndex(e => e.id == product.id)
        this.db[idProduct] = product
    }
    async findById(id: string): Promise<Product> {
        return this.db.find(e => e.id == id)
    }
    async getAll(): Promise<Product[]> {
        return this.db;
    }
    delete: (id: Id) => Promise<void>;
}