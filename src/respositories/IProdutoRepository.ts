import { Produto } from "../entities/Produto";
import { Id } from "../entities/types/Id";

export interface IProdutoRepository {
    save: (produto: Produto) => Promise<void>
    subtrair: (id: Id, quantity: number) => Promise<void>
}