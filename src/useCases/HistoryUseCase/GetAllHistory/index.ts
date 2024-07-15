import { HistoryRepositoryPrisma } from "../../../respositories/implementations/Prisma/HistoryRepositoryPrisma"
import { GetAllHistoryController } from "./GetAllHistoryController"
import { GetAllHistoryUseCase } from "./GetAllHistoryUseCase"

const historyRepositoryPrisma = new HistoryRepositoryPrisma()

const getAllHistoryUseCase = new GetAllHistoryUseCase(historyRepositoryPrisma)
const getAllHistoryController = new GetAllHistoryController(getAllHistoryUseCase)

export {
    getAllHistoryUseCase,
    getAllHistoryController
}