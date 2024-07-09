import { Product } from "../../../entities/Product";
import { IProductRepository } from "../../../respositories/IProductRepository";
import { CreateProductRequestDto } from "./CreateProductDto";

export class CreateProductUseCase {
    constructor(
        private ProductRepository: IProductRepository
    ) { }

    async execute({name, price}: CreateProductRequestDto) {
        const productCriado = Product.create(name, price)
        await this.ProductRepository.save(productCriado)
    }
}