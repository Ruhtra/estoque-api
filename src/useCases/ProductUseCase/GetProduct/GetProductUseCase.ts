import { IProductRepository } from "../../../respositories/IProductRepository";
import { GetProductRequestDto } from "./GetProductDto";

export class GetProductUseCase {
    constructor (
        private productRepository: IProductRepository
    ) {}

    async execute({ id }: GetProductRequestDto) {
        return await this.productRepository.get(id)
    }
}