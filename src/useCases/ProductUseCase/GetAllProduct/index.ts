import { ProductRepositoryPrisma } from "../../../respositories/implementations/Prisma/ProductRepositoryPrisma"
import { GetAllProductController } from "./GetAllProductController"
import { GetAllProductUseCase } from "./GetAllProductUseCase"

const productRepositoryPrisma = new ProductRepositoryPrisma()

const getAllProductUseCase = new GetAllProductUseCase(productRepositoryPrisma)
const getAllProductController = new GetAllProductController(getAllProductUseCase)

export {
    getAllProductUseCase,
    getAllProductController
}