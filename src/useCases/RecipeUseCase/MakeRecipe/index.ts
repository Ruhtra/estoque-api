import { RecipeRepositoryPrisma } from "../../../respositories/implementations/Prisma/RecipeRepositoryPrisma"
import { StockRepositoryPrisma } from "../../../respositories/implementations/Prisma/SotckRepositoryPrisma"
import { MakeRecipeController } from "./MakeRecipeController"
import { MakeRecipeUseCase } from "./MakeRecipeUseCase"

const recipeRepository = new RecipeRepositoryPrisma()
const stockRepositoryPrisma = new StockRepositoryPrisma()

const makeRecipeUseCase = new MakeRecipeUseCase(recipeRepository, stockRepositoryPrisma)
const makeRecipeController = new MakeRecipeController(makeRecipeUseCase)

export {
    makeRecipeUseCase,
    makeRecipeController
}