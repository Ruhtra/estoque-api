import { Produto } from "./Produto"
import { Id } from "./types/Id"

export class Item {
    public readonly id: Id
    public quantity: number
    public produto: Produto

    private constructor(data: Item) {
        Object.assign(this, data)
    }
}