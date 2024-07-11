import { Ingredient } from "../../../entities/Item";
import { Product } from "../../../entities/Product";
import { Recipe } from "../../../entities/Recipe";
import { IRecipeRepository } from "../../IRecipeRepository";

export class RecipeRepositoryLocal implements IRecipeRepository {

    private db: Recipe[] = [
        Recipe.with({
            id: "66881156a0fb7fb40a8c17d6",
            name: "molho de tomate",
            ingredients: [
                Ingredient.with(
                    {
                        id: "65108568228841312ab90155",
                        product: Product.with({
                            id: "6688091774f5609eb87e7e1a",
                            name: "mlho de tomate",
                        }),
                        quantity: 3
                    })
            ]
        })
    ]
    async findById(id: string): Promise<Recipe> {
        const recipe = this.db.find(e => e.id == id)
        return recipe
    }
}