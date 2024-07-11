import { Recipe } from "../../../entities/Recipe";
import { IProductRepository } from "../../../respositories/IProductRepository";
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
        if (!recipe) throw new Error("Recipe não foi encontrada")

        // recipe.MakeRecipe()

        // autaliza o estoque
        // recipe.ingredients.forEach(r => {
        //     this.
        //     this.stockRepository.update(r.product)
        // });
        // await this.recipeRepository.update(recipe)
    }
}