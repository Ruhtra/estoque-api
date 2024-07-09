import { Router } from "express";
import { createProductController } from "./useCases/ProductUseCase/CreateProduct";
import { getAllProductController } from "./useCases/ProductUseCase/GetAllProduct";
import { getProductController } from "./useCases/ProductUseCase/GetProduct";

const router = Router()

// product
router.get("/product/getAll", (req, res) => getAllProductController.handle(req, res))
router.get("/product/get", (req, res) => getProductController.handle(req, res))
router.post("/product/create", (req, res) => createProductController.handle(req, res))


export { router }