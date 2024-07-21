import { MeasureTypeRepositoryPrisma } from "../../../respositories/implementations/Prisma/MeasureTypeRepositoryPrisma"
import { GetAllMeasureTypeController } from "./GetAllMeasureTypeController"
import { GetAllMeasureTypeUseCase } from "./GetAllMeasureTypeUseCase"

const measureTypeRepositoryPrisma = new MeasureTypeRepositoryPrisma()

const getAllMeasureTypeUseCase = new GetAllMeasureTypeUseCase(measureTypeRepositoryPrisma)
const getAllMeasureTypeController = new GetAllMeasureTypeController(getAllMeasureTypeUseCase)

export {
    getAllMeasureTypeUseCase,
    getAllMeasureTypeController
}