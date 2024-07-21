import { IRecipeRepository } from "../../IRecipeRepository";
import { Recipe } from "../../../entities/Recipe";
import { Ingredient } from "../../../entities/Ingredient";
import { Product } from "../../../entities/Product";
import { prismaClient } from "../../../prisma";
import { Stock } from "../../../entities/Stock";
import { MeasureType } from "../../../entities/MesureTypes";

export class RecipeRepositoryPrisma implements IRecipeRepository {
    // private constructor(private readonly prismaClient: PrismaClient) {}

    // public static create(prismaClient: PrismaClient) {
    //     return new ProductRepositoryPrisma(prismaClient);
    // }

    public async findById(id: string): Promise<Recipe> {
        const recipes = await prismaClient.recipe.findUnique({
            where: {
                id: id
            },
            include: {
                ingredient: {
                    include: {
                        product: {
                            include: {
                                stock: true,
                                measureType: true
                            }
                        }
                    }
                }
            }
        });


        return Recipe.with({
            id: recipes.id,
            name: recipes.name,
            ingredients: recipes.ingredient.map(e => {
                return Ingredient.with({
                    id: e.id,
                    quantity: e.quantity,
                    product: Product.with({
                        id: e.product.id,
                        name: e.product.id,
                        measureType: MeasureType.with({
                            id: e.product.measureType.id,
                            name: e.product.measureType.name
                        }),
                        stock: Stock.with({
                            amount: e.product.stock.amount,
                            id: e.product.stock.id
                        })
                    }),
                })
            })
        })
    }
    // public async update (recipe: Recipe): Promise<void> {
    //     this.prismaClient.recipe.update({
    //         where: {
    //             id: recipe.id
    //         },
    //         data: {
    //             name: recipe.name,
    //             ingredients: {
    //                 update: {
    //                     where: {
    //                         recipeId: recipe
    //                     }
    //                 }
    //             }
    //         }
    //     })
    // }

}