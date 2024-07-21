import { MeasureTypeRepositoryPrisma } from "../../../respositories/implementations/Prisma/MeasureTypeRepositoryPrisma";
import { ProductRepositoryPrisma } from "../../../respositories/implementations/Prisma/ProductRepositoryPrisma";
import { CreateProductController } from "./CreateProductController";
import { CreateProductUseCase } from "./CreateProductUseCase";

const productRepository = new ProductRepositoryPrisma()
const measureTypeRepository = new MeasureTypeRepositoryPrisma()

const createProductUseCase = new CreateProductUseCase(productRepository, measureTypeRepository)
const createProductController = new CreateProductController(createProductUseCase)

export {
    createProductUseCase,
    createProductController
}