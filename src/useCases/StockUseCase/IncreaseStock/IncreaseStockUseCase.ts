import { Stock } from "../../../entities/Sotck";
import { StockRepositoryPrisma } from "../../../respositories/implementations/Prisma/SotckRepositoryPrisma";
import { IStockRepository } from "../../../respositories/IStockRepository";
import { IUseCase } from "../../IUseCase";
import { IncreaseStockRequestDto } from "./IncreaseStockDto";

export class IncreaseStockUseCase implements IUseCase<IncreaseStockRequestDto, void> {
    constructor (
        private stockRepository: IStockRepository
    ) {}
    async execute({ id, amount, price }: IncreaseStockRequestDto): Promise<void> {
        const stock: Stock = await this.stockRepository.get(id)
        if (!stock) throw new Error("Stock não foi encontrado")

        stock.increaseAmount(amount,  price)

        await this.stockRepository.update(stock);
    }
}