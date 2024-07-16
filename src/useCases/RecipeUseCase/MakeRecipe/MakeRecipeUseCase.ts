import { Recipe } from "../../../entities/Recipe";
import { IRecipeRepository } from "../../../respositories/IRecipeRepository";
import { IStockRepository } from "../../../respositories/IStockRepository";
import { IUseCase } from "../../IUseCase";
import { MakeRecipeRequestDto } from "./MakeRecipeDto";

export class MakeRecipeUseCase implements IUseCase<MakeRecipeRequestDto, void> {
    constructor(
        private recipeRepository: IRecipeRepository,
        private stockRepository: IStockRepository,
    ) { }

    async execute({ id }: MakeRecipeRequestDto): Promise<void> {
        const recipe: Recipe = await this.recipeRepository.findById(id)
        if (!recipe) throw new Error("Recipe not found")

        recipe.MakeRecipe()

        //add await in promise all
        recipe.ingredients.forEach(async r => {
            await this.stockRepository.update(r.product.stock)
        })
    }
}