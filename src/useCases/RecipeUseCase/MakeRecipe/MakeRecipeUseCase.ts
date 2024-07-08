import { Recipe } from "../../../entities/Recipe";
import { IProductRepository } from "../../../respositories/IProductRepository";
import { IRecipeRepository } from "../../../respositories/IRecipeRepository";
import { MakeRecipeRequestDto } from "./MakeRecipeDto";

export class MakeRecipeUseCase {
    constructor(
        private recipeRepository: IRecipeRepository,
        private produtoRepository: IProductRepository
    ) { }

    async execute({ id }: MakeRecipeRequestDto) {
        const recipe: Recipe = await this.recipeRepository.findById(id)
        if (!recipe) throw new Error("Recipe não foi encontrada")

        recipe.MakeRecipe()

        // autaliza o estoque
        recipe.ingredients.forEach(r => {
            this.produtoRepository.update(r.product)
        });
        // await this.recipeRepository.update(recipe)
    }
}