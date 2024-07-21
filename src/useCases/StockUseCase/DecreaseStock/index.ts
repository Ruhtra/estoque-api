import { HistoryRepositoryPrisma } from "../../../respositories/implementations/Prisma/HistoryRepositoryPrisma"
import { StockRepositoryPrisma } from "../../../respositories/implementations/Prisma/StockRepositoryPrisma"
import { DecreaseStockController } from "./DecreaseStockController"
import { DecreaseStockUseCase } from "./DecreaseStockUseCase"


const stockRepositoryPrisma = new StockRepositoryPrisma()
const historyRepositoryPrisma = new HistoryRepositoryPrisma()

const decreaseStockUseCase = new DecreaseStockUseCase(stockRepositoryPrisma, historyRepositoryPrisma)
const decreaseStockController = new DecreaseStockController(decreaseStockUseCase)

export {
    decreaseStockUseCase,
    decreaseStockController
}