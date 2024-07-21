import { Id } from "../../../entities/types/Id"

export interface GetProductRequestDto {
    id: string
}

export interface GetProductResponseDto {
    id: Id
    name: string,
    stock: {
        id: Id,
        amount: number
    },
    measureType: {
        id: Id,
        name: string
    }
}