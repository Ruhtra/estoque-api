import { Produto } from "../../../entities/Produto";
import { Id } from "../../../entities/types/Id";
import { IProdutoRepository } from "../../IProdutoRepository";

export class ProdutoRepositoryLocal implements IProdutoRepository {
    private db: Produto[] = [
        {
            amount: 4,
            id: new Id("6688091774f5609eb87e7e1a"),
            name: "tomate",
            price: 1.53
        }
    ]

    async save(produto: Produto): Promise<void> {
        this.db.push(produto)
    }
    async subtrair(id: Id, quantity: number): Promise<void> {
        const a = this.db.findIndex(e => e.id.toString() == id.toString())
        this.db[a].amount = this.db[a].amount - quantity
    }
}