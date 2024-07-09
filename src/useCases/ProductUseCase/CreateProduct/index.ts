import { ProductRepositoryPrisma } from "../../../respositories/implementations/Prisma/ProductRepositoryPrisma";
import { CreateProductController } from "./CreateProductController";
import { CreateProductUseCase } from "./CreateProductUseCase";

const productRepository = new ProductRepositoryPrisma()

const createProductUseCase = new CreateProductUseCase(productRepository)
const createProductController = new CreateProductController(createProductUseCase)

export {
    createProductUseCase,
    createProductController
}