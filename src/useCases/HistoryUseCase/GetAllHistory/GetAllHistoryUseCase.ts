import { OperationHistoryEnum } from "../../../entities/History";
import { IHistoryRepository } from "../../../respositories/IHistoryRepository";
import { IUseCase } from "../../IUseCase";
import { GetAllHistoryRequestDto, GetAllHistoryResponseDto } from "./GetAllHistoryDto";

export class GetAllHistoryUseCase implements IUseCase<GetAllHistoryRequestDto, GetAllHistoryResponseDto[]> {
    constructor(
        private historyRepository: IHistoryRepository
    ) {}

    async execute({ operation }: GetAllHistoryRequestDto): Promise<GetAllHistoryResponseDto[]> {
        
        const histories = await this.historyRepository.getAll()
        var historiesOutput = histories.map(h => {
            return  {
                id: h.id.toString(),
                amount: h.amount,
                // price: h.price,
                operation: OperationHistoryEnum[h.operation],
                createdAt: h.createdAt,
                product: {
                    name: h.stock.product.name,
                    measureType: {
                        name: h.stock.product.measureType.name
                    }
                }
            }
        })

        if (operation != null) {
            historiesOutput = historiesOutput.filter(h => {
                return h.operation == operation
            })
        }

        return historiesOutput
    }
}