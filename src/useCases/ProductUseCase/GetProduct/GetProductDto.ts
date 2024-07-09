import { Id } from "../../../entities/types/Id"

export interface GetProductRequestDto {
    id: string
}

export interface GetProductResponseDto {
    id: Id
    name: string
    price: number
    amount: number
}