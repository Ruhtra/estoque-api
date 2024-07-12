import { Ingredient, Product } from "@prisma/client";
import { Id } from "../../../entities/types/Id";


export interface MakeRecipeRequestDto {
    id: string
}