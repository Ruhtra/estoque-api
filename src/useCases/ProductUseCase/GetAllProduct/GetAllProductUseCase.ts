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
                stock: {
                    id: p.stock.id,
                    amount: p.stock.amount
                },
                measureType: {
                    id: p.measureType.id,
                    name: p.measureType.name
                }
            }
        })
    }
}