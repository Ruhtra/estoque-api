
import { Product } from "../../../entities/Product";
import { Id } from "../../../entities/types/Id";
import { prismaClient } from "../../../prisma";
import { IProductRepository } from "../../IProductRepository";

export class ProductRepositoryPrisma implements IProductRepository {
    // private constructor(private readonly prismaClient: PrismaClient) {}

    // public static create(prismaClient: PrismaClient) {
    //     return new ProductRepositoryPrisma(prismaClient);
    // }

    public async save(product: Product): Promise<void> {
        await prismaClient.product.create({
            data: {
                id: product.id.toString(),
                name: product.name,
                // price: product.price,
                // amount: product.amount
            },
        });
    }
    public async update (product: Product): Promise<void> {
        await prismaClient.product.update({
            where: {
                id: product.id.toString()
            },
            data: {
                // amount: product.amount,
                name: product.name,
                // price: product.price
            }
        })
    }
    
    async get(id: Id): Promise<Product> {
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

    // public async list(): Promise<Product[]> {
    //     const products = await this.prismaClient.product.findMany();

    //     const productList = products.map((p) => {
    //         const product = Product.with({
    //             id: p.id,
    //             name: p.name,
    //             price: p.price,
    //             quantity: p.quantity,
    //         });

    //         return product;
    //     });

    //     return productList;
    // }
}
