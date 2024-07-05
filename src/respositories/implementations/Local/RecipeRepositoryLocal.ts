import { Item } from "../../../entities/Item";
import { Recipe } from "../../../entities/Recipe";
import { Id } from "../../../entities/types/Id";
import { IRecipeRepository } from "../../IRecipeRepository";

export class RecipeRepositoryLocal implements IRecipeRepository {
    private db: Recipe[] = [{
        id: new Id("66881156a0fb7fb40a8c17d6"),
        name: "molho de tomate",
        ingredients: [
            {
                id: new Id("65108568228841312ab90155"),
                produto: {
                    id: new Id("6688091774f5609eb87e7e1a"),
                    amount: 4,
                    name: "mlho de tomate",
                    price: 2.5
                },
                quantity: 3
            }
        ]
    }]
    async findById(id: Id): Promise<Recipe> {
        const recipe = this.db.find(e => e.id.toString() == id.toString())
        return recipe
    }
}