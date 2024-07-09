import { Request, Response } from "express";
import { GetProductUseCase } from "./GetProductUseCase";
import { GetProductRequestDto } from "./GetProductDto";

export class GetProductController {
    constructor (
        private getProductUseCase: GetProductUseCase
    ) {}

    async handle(request: Request, response: Response) {
        try {
            const idProduct: string = request.query.id as string
            if (!idProduct) return response.sendStatus(400)

            const product = await this.getProductUseCase.execute({ id: idProduct })
            return response.json(product)
        } catch (error) {
            console.error(error);
            return response.sendStatus(500)
        }
    }
}