import { Produto } from "../../entities/Produto";
import { IProdutoRepository } from "../IProdutoRepository";

export class ProdutoLocalRepository implements IProdutoRepository {
    private db: Produto[] = []

    async save(produto: Produto): Promise<void> {
        this.db.push(produto)
    }
}