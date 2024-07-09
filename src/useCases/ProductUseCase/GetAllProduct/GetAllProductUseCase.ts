import { IProductRepository } from "../../../respositories/IProductRepository";

export class GetAllProductUseCase {
    constructor (
        private productRepository: IProductRepository
    ) {}

    async execute() {
        return await this.productRepository.getAll()
    }
}