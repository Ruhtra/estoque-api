import { IProductRepository } from "../../../respositories/IProductRepository";
import { IUseCase } from "../../IUseCase";
import { GetAllProductResponseDto } from "./GetAllProductDto";

export class GetAllProductUseCase implements IUseCase<void, GetAllProductResponseDto[]> {
    constructor(
        private productRepository: IProductRepository
    ) { }

    async execute(): Promise<GetAllProductResponseDto[]> {
        const products = await this.productRepository.getAll()

        return products.map(p => {
            return {
                id: p.id,
                name: p.name,
                price: p.price,
                amount: p.amount
            }
        })
    }
}