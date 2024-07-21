import { History, OperationHistoryEnum } from "../../../entities/History";
import { IHistoryRepository } from "../../../respositories/IHistoryRepository";
import { IStockRepository } from "../../../respositories/IStockRepository";
import { IUseCase } from "../../IUseCase";
import { DecreaseStockRequestDto } from "./DecreaseStockDto";

export class DecreaseStockUseCase implements IUseCase<DecreaseStockRequestDto, void> {
    constructor (
        private stockRepository: IStockRepository,
        private historyRepository: IHistoryRepository
    ) {}

    async execute({ id, amount }: DecreaseStockRequestDto): Promise<void> {
        const stock = await this.stockRepository.findById(id)
        if (!stock) throw new Error("Stock not found")

        stock.decreaseAmount(amount)
        this.stockRepository.update(stock)

        const history = History.create(amount, 0, OperationHistoryEnum.decrease, stock)
        this.historyRepository.save(history)
    }
}