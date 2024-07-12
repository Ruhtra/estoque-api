import { Stock } from "../../../entities/Sotck";
import { Id } from "../../../entities/types/Id";
import { prismaClient } from "../../../prisma";
import { IStockRepository } from "../../IStockRepository";



//MUITA ATENAÇÃO
//É POSSIVEL QUE SEJA DUPLICADA OS HISTORICOS JA EXISTENTE
//OU OCORRA ERRO EM CASO DO USECASE CARREGAR OS HISTORICOS ANTERIORES
export class StockRepositoryPrisma implements IStockRepository {
    async update(stock: Stock): Promise<void> {
        await prismaClient.stock.update({
            data: {
                amount: stock.amount,
                history: {
                    createMany: {
                        data: stock.history.map(h => ({
                            id: h.id.toString(),
                            amount: h.amount,
                            price: h.price,
                            operation: h.operation
                        })),

                    }
                },
            },
            where: {
                id: stock.id.toString()
            }
        })
    }
    async get(id: Id): Promise<Stock> {
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

}