import { Id } from "../../../entities/types/Id"

export type IncreaseStockRequestDto = {
    id: Id
    amount: number,
    price: number
}