import { ProdutoRepositoryPrisma } from "../../../respositories/implementations/Prisma/ProductRepositoryPrisma";
import { CreateProdutoController } from "./CreateProdutoController";
import { CreateProdutoUseCase } from "./CreateProdutoUseCase";

const produtoRepository = new ProdutoRepositoryPrisma()

const createProdutoUseCase = new CreateProdutoUseCase(produtoRepository)
const createProdutoController = new CreateProdutoController(createProdutoUseCase)

export {
    createProdutoUseCase,
    createProdutoController
}