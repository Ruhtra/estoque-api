
import { Product } from "../../../entities/Product";
import { Id } from "../../../entities/types/Id";
import { prismaClient } from "../../../prisma";
import { IProductRepository } from "../../IProductRepository";

export class ProductRepositoryPrisma implements IProductRepository {
    public async save(product: Product): Promise<void> {
        await prismaClient.product.create({
            data: {
                id: product.id.toString(),
                name: product.name,
                stock: {
                    create: {
                        id: product.stock.id.toString(),
                        amount: product.stock.amount
                    }
                }
            },
        });
    }
    public async update (product: Product): Promise<void> {
        await prismaClient.product.update({
            where: {
                id: product.id.toString()
            },
            data: {
                name: product.name,
            }
        })
    }
    
    async findById(id: Id): Promise<Product> {
        const product = await prismaClient.product.findFirst({
            where: {
                id: id.toString()
            }
        })
        
        return Product.with(product);
    }
    public async getAll(): Promise<Product[]> {
        const recipes = await prismaClient.product.findMany()
        return recipes.map(e => Product.with(e))
    }
}
