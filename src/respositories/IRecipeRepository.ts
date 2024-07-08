import { Recipe } from "../entities/Recipe";

export interface IRecipeRepository {
    findById: (id: string) => Promise<Recipe>
}