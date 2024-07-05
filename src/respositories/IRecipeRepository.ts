import { Recipe } from "../entities/Recipe";
import { Id } from "../entities/types/Id";

export interface IRecipeRepository {
    findById: (id: Id) => Promise<Recipe>
}