import { Product } from "../../../entities/Product";
import { IProductRepository } from "../../../respositories/IProductRepository";
import { IUseCase } from "../../IUseCase";
import { CreateProductRequestDto } from "./CreateProductDto";

export class CreateProductUseCase implements IUseCase<CreateProductRequestDto, void> {
    constructor(
        private ProductRepository: IProductRepository
    ) { }

    async execute({name}: CreateProductRequestDto): Promise<void> {
        const productCriado = Product.create(name)
        await this.ProductRepository.save(productCriado)
    }
}