import { ProductRepositoryPrisma } from "../../../respositories/implementations/Prisma/ProductRepositoryPrisma"
import { DeleteProductController } from "./DeleteProductController"
import { DeleteProductUseCase } from "./DeleteProductUseCase"

const productRepositoryPrisma = new ProductRepositoryPrisma()

const deleteProductUseCase = new DeleteProductUseCase(productRepositoryPrisma)
const deleteProductController = new DeleteProductController(deleteProductUseCase)

export {
    deleteProductUseCase,
    deleteProductController
}