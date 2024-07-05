import { Recipe } from "../../../entities/Recipe";
import { Id } from "../../../entities/types/Id";
import { prismaClient } from "../../../prisma";
import { IRecipeRepository } from "../../IRecipeRepository";

export class RecipeRepository implements IRecipeRepository {
    async findById(id: Id): Promise<Recipe> {
        const founded = await prismaClient.recipePrisma.findUnique({
            where: {
                id: id.toString()
            },
            include: {
                ingredients: {
                    include: {
                        produtos: true
                    }
                }
            }
        });

        if (!founded) { return null; }


        return {
            id: new Id(founded.id),
            name: founded.name,
            ingredients: founded.ingredients.map(item => ({
                id: new Id(item.id),
                quantity: item.quantity,
                produto: {
                    id: new Id(item.produtos.id),
                    name: item.produtos.name,
                    amount: item.produtos.amount,
                    price: item.produtos.price
                }
            }))
        }
    };
}