import { StockRepositoryPrisma } from "../../../respositories/implementations/Prisma/SotckRepositoryPrisma"
import { IncreaseStockController } from "./IncreaseStockController"
import { IncreaseStockUseCase } from "./IncreaseStockUseCase"


const stockRepositoryPrisma = new StockRepositoryPrisma()

const increaseStockUseCase = new IncreaseStockUseCase(stockRepositoryPrisma)
const increaseStockController = new IncreaseStockController(increaseStockUseCase)

export {
    increaseStockUseCase,
    increaseStockController
}