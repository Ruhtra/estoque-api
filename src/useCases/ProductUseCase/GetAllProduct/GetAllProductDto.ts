import { Id } from "../../../entities/types/Id"

export interface GetAllProductResponseDto {
    id: Id
    name: string
    price: number
    amount: number
}