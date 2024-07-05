import { Router } from "express";
import { createProdutoController } from "./useCases/ProdutoUseCase/CreateProduto";

const router = Router()

router.post("/produto/create", (req, res) => createProdutoController.handle(req, res))


export { router }