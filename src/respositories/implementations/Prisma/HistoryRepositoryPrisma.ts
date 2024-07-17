import { History, OperationHistoryEnum } from "../../../entities/History";
import { Product } from "../../../entities/Product";
import { Stock } from "../../../entities/Stock";
import { prismaClient } from "../../../prisma";
import { IHistoryRepository } from "../../IHistoryRepository";

export class HistoryRepositoryPrisma implements IHistoryRepository {
    async  save(history: History): Promise<void> {
        await prismaClient.history.create({
            data: {
                amount: history.amount,
                price: history.price,
                id: history.id.toString(),
                operation: history.operation,
                createdAt: history.createdAt,
                Stock: {
                    connect: {
                        id: history.stock.id.toString()
                    }
                }
            }
        })
    }
    async getAll(): Promise<History[]> {
        const histories = await prismaClient.history.findMany({
            include: {
                Stock: {
                    include: {
                        Product: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        return histories.map(e => {
            return History.with({
                id: e.id,
                amount: e.amount,
                operation: OperationHistoryEnum[e.operation],
                price: e.price,
                createdAt: e.createdAt,
                stock: Stock.with({
                    id: e.Stock.id,
                    amount: e.Stock.amount,
                    product: Product.with({
                        id: e.Stock.Product.id,
                        name: e.Stock.Product.name
                    })
                })
            })
        })
    }

}