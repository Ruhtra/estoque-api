import { History } from "../../../entities/History";
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
                Stock: {
                    connect: {
                        id: history.stock.id.toString()
                    }
                }
            }
        })
    }

}