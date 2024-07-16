import { OperationHistoryEnum } from "../../../entities/History"

export class GetAllHistoryRequestDto {
    operation?: OperationHistoryEnum
}

export class GetAllHistoryResponseDto {
    id: string
    amount: number
    price: number
    operation: OperationHistoryEnum
    product: {
        name: string
    }

}