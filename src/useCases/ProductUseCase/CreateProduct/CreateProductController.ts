import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";
import { CreateProductRequestDto } from "./CreateProductDto";

export class CreateProductController {
    constructor(
        private createProductUseCase: CreateProductUseCase
    ) { }

    async handle(request: Request, response: Response) {
        try {
            const product: CreateProductRequestDto = request.body as CreateProductRequestDto;
            await this.createProductUseCase.execute(product)

            return response.sendStatus(200)
        } catch (error) {
            console.error(error);
            return response.sendStatus(500)
        }
    }
}