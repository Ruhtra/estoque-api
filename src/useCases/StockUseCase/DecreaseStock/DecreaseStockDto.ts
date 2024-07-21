import { Id } from "../../../entities/types/Id"

export type DecreaseStockRequestDto = {
    id: Id,
    amount: number
    // price: number
}
