import { IProductRepository } from "../../../respositories/IProductRepository";
import { IUseCase } from "../../IUseCase";
import { GetProductRequestDto, GetProductResponseDto } from "./GetProductDto";

export class GetProductUseCase implements IUseCase<GetProductRequestDto, GetProductResponseDto> {
    constructor(
        private productRepository: IProductRepository
    ) { }

    async execute({ id }: GetProductRequestDto): Promise<GetProductResponseDto> {
        const product = await this.productRepository.get(id)

        return {
            id: product.id,
            name: product.name,
            price: product.price,
            amount: product.amount
        }
    }
}