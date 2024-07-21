import { Router } from "express";
import { createProductController } from "./useCases/ProductUseCase/CreateProduct";
import { getAllProductController } from "./useCases/ProductUseCase/GetAllProduct";
import { getProductController } from "./useCases/ProductUseCase/GetProduct";
import { makeRecipeController } from "./useCases/RecipeUseCase/MakeRecipe";
import { increaseStockController } from "./useCases/StockUseCase/IncreaseStock";
import { getAllHistoryController } from "./useCases/HistoryUseCase/GetAllHistory";
import { deleteProductController } from "./useCases/ProductUseCase/DeleteProduct";
import { decreaseStockController } from "./useCases/StockUseCase/DecreaseStock";

const router = Router()

// product
router.get("/product/getAll", (req, res) => getAllProductController.handle(req, res))
router.get("/product/get", (req, res) => getProductController.handle(req, res))
router.post("/product/create", (req, res) => createProductController.handle(req, res))
router.delete("/product/delete", (req, res) => deleteProductController.handle(req, res))


router.post("/recipe/make", (req, res) => makeRecipeController.handle(req, res))

router.post("/stock/increase", (req, res) => increaseStockController.handle(req, res))
router.post("/stock/decrease", (req, res) => decreaseStockController.handle(req, res))

router.get("/history/all", (req, res) => getAllHistoryController.handle(req, res))


export { router }