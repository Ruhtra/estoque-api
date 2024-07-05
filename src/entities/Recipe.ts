import { Item } from "./Item"
import { Id } from "./types/Id"

export class Recipe {
    public readonly id: Id
    public name: string
    public ingredients: Item[]
    
    private constructor(data: Recipe){
        Object.assign(this, data)
    }
}