export interface GetProductRequestDto {
    id: string
}

export interface GetProductResponseDto {
    id: string
    name: string
    price: number
    amount: number
}