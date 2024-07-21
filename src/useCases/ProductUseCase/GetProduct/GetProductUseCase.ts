import { IProductRepository } from "../../../respositories/IProductRepository";
import { IUseCase } from "../../IUseCase";
import { GetProductRequestDto, GetProductResponseDto } from "./GetProductDto";

export class GetProductUseCase implements IUseCase<GetProductRequestDto, GetProductResponseDto> {
    constructor(
        private productRepository: IProductRepository
    ) { }

    async execute({ id }: GetProductRequestDto): Promise<GetProductResponseDto> {
        const product = await this.productRepository.findById(id)

        return {
            id: product.id,
            name: product.name,
            stock: {
                id: product.stock.id,
                amount: product.stock.amount
            },
            measureType: {
                id: product.measureType.id,
                name: product.measureType.name
            }
        }
    }
}