import { OperationHistoryEnum } from "../../../entities/History";
import { IHistoryRepository } from "../../../respositories/IHistoryRepository";
import { IUseCase } from "../../IUseCase";
import { GetAllHistoryResponseDto } from "./GetAllHistoryDto";

export class GetAllHistoryUseCase implements IUseCase<void, GetAllHistoryResponseDto[]> {
    constructor(
        private historyRepository: IHistoryRepository
    ) {}

    async execute(): Promise<GetAllHistoryResponseDto[]> {
        const histories = await this.historyRepository.getAll()

        return histories.map(h => {
            return  {
                id: h.id.toString(),
                amount: h.amount,
                price: h.price,
                operation: OperationHistoryEnum[h.operation],
                product: {
                    name: h.stock.product.name
                }
            }
        })
    }
}