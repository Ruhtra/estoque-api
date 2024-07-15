import { HistoryRepositoryPrisma } from "../../../respositories/implementations/Prisma/HistoryRepositoryPrisma"
import { StockRepositoryPrisma } from "../../../respositories/implementations/Prisma/StockRepositoryPrisma"
import { IncreaseStockController } from "./IncreaseStockController"
import { IncreaseStockUseCase } from "./IncreaseStockUseCase"


const stockRepositoryPrisma = new StockRepositoryPrisma()
const historyRepositoryPrisma = new HistoryRepositoryPrisma()

const increaseStockUseCase = new IncreaseStockUseCase(stockRepositoryPrisma, historyRepositoryPrisma)
const increaseStockController = new IncreaseStockController(increaseStockUseCase)

export {
    increaseStockUseCase,
    increaseStockController
}