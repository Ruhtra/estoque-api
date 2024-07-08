import { Product } from "../../../entities/Product";
import { IProductRepository } from "../../IProductRepository";

export class ProductRepositoryLocal implements IProductRepository {
    private db: Product[] = [
        Product.with({
            id: "6688091774f5609eb87e7e1a",
            amount: 4,
            name: "tomate",
            price: 1.53
        })
    ]
    
    async save(product: Product): Promise<void> {
        this.db.push(product)
    }
    async update (product: Product): Promise<void> {
        // throw new Error("NOT IMPLEMENTED")
    }
}