import { Produto } from "../../../entities/Produto";
import { IProdutoRepository } from "../../../respositories/IProdutoRepository";
import { CreateProdutoRequestDto } from "./CreateProdutoDto";

export class CreateProdutoUseCase {
    constructor(
        private ProdutoRepository: IProdutoRepository
    ) { }

    async execute({name, price}: CreateProdutoRequestDto) {
        const produtoCriado = Produto.create(name, price)
        await this.ProdutoRepository.save(produtoCriado)
    }
}