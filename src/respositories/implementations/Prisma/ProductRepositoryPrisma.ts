
import { MeasureType } from "../../../entities/MesureTypes";
import { Product } from "../../../entities/Product";
import { Stock } from "../../../entities/Stock";
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
                },
                measureType: {
                    connect: {
                        id: product.measureType.id.toString()
                    }
                }
            },
        });
    }
    public async update(product: Product): Promise<void> {
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
        const product = await prismaClient.product.findFirstOrThrow({
            where: {
                id: id.toString()
            },
            include: {
                stock: true,
                measureType:  true
            }
        })

        return Product.with({
            id: product.id.toString(),
            name: product.name,
            stock: Stock.with({
                id: product.stock.id.toString(),
                amount: product.stock.amount
            }),
            measureType: MeasureType.with({
                id: product.measureType.id,
                name: product.measureType.name
            })
        });
    }
    public async getAll(): Promise<Product[]> {
        const products = await prismaClient.product.findMany({
            include: {
                stock: true,
                measureType: true
            }
        })

        return products.map(e => Product.with({
            id: e.id.toString(),
            name: e.name,
            stock: Stock.with({
                id: e.stock.id.toString(),
                amount: e.stock.amount
            }),
            measureType: MeasureType.with({
                id: e.measureType.id,
                name: e.measureType.name
            })
        }))
    }

    async delete(id: Id): Promise<void> {
        await prismaClient.product.delete({
            where: {
                id: id.toString(),
            },
        })

    }
}
