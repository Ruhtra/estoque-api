import { IProductRepository } from "../../../respositories/IProductRepository";
import { IUseCase } from "../../IUseCase";
import { DeleteProductRequestDto } from "./DeleteProductDto";

export class DeleteProductUseCase implements IUseCase<DeleteProductRequestDto, void> {
    constructor(
        private productRepository: IProductRepository
    ) { }

    async execute({ id }: DeleteProductRequestDto): Promise<void> {
        const product = await this.productRepository.findById(id)
        if (!product) throw new Error("Product not found")

        await this.productRepository.delete(id)
    }
}