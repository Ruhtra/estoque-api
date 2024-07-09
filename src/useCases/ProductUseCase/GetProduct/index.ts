import { ProductRepositoryPrisma } from "../../../respositories/implementations/Prisma/ProductRepositoryPrisma"
import { GetProductController } from "./GetProductController"
import { GetProductUseCase } from "./GetProductUseCase"

const productRepositoryPrisma = new ProductRepositoryPrisma()

const getProductUseCase = new GetProductUseCase(productRepositoryPrisma)
const getProductController = new GetProductController(getProductUseCase)

export {
    getProductUseCase,
    getProductController
}