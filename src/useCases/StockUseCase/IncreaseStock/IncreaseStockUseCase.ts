import { History, OperationHistoryEnum } from "../../../entities/History";
import { Stock } from "../../../entities/Stock";
import { IHistoryRepository } from "../../../respositories/IHistoryRepository";
import { IStockRepository } from "../../../respositories/IStockRepository";
import { IUseCase } from "../../IUseCase";
import { IncreaseStockRequestDto } from "./IncreaseStockDto";

export class IncreaseStockUseCase implements IUseCase<IncreaseStockRequestDto, void> {
    constructor (
        private stockRepository: IStockRepository,
        private historyRepository: IHistoryRepository
    ) {}
    async execute({ id, amount, price }: IncreaseStockRequestDto): Promise<void> {
        const stock: Stock = await this.stockRepository.findById(id)
        if (!stock) throw new Error("Stock not found")

        stock.increaseAmount(amount, price)
        await this.stockRepository.update(stock);

        const history = History.create(amount, price, OperationHistoryEnum.increase)
        await this.historyRepository.save(history)
    }
}