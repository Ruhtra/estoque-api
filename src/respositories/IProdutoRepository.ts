import { Produto } from "../entities/Produto";

export interface IProdutoRepository {
    save: (produto: Produto) => Promise<void>
}