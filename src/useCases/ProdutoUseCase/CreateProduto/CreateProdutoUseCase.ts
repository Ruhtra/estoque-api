import { Product } from "../../../entities/Product";
import { IProductRepository } from "../../../respositories/IProductRepository";
import { CreateProdutoRequestDto } from "./CreateProdutoDto";

export class CreateProdutoUseCase {
    constructor(
        private ProdutoRepository: IProductRepository
    ) { }

    async execute({name, price}: CreateProdutoRequestDto) {
        const produtoCriado = Product.create(name, price)
        await this.ProdutoRepository.save(produtoCriado)
    }
}