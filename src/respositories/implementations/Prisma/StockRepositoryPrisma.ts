import { Stock } from "../../../entities/Stock";
import { Id } from "../../../entities/types/Id";
import { prismaClient } from "../../../prisma";
import { IStockRepository } from "../../IStockRepository";



export class StockRepositoryPrisma implements IStockRepository {
    async update(stock: Stock): Promise<void> {
        await prismaClient.stock.update({
            data: {
                amount: stock.amount,
            },
            where: {
                id: stock.id.toString()
            }
        })
    }
    async findById(id: Id): Promise<Stock> {
        const stock = await prismaClient.stock.findFirst({
            where: {
                id: id.toString()
            }
        })

        return Stock.with({
            id: stock.id,
            amount: stock.amount,
        })
    }
    async findByIdProduct(id: Id): Promise<Stock> {
        const stock = await prismaClient.stock.findFirst({
            where: {
                productId: id.toString()
            }
        })

        return Stock.with({
            id: stock.id,
            amount: stock.amount,
        })
    }

}