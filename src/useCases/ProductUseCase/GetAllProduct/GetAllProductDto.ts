import { Id } from "../../../entities/types/Id"

export interface GetAllProductResponseDto {
    id: Id
    name: string,
    stock: {
        id: Id,
        amount: number
    }
}