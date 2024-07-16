import { Request, Response } from "express";
import { DeleteProductUseCase } from "./DeleteProductUseCase";
import { DeleteProductRequestDto } from "./DeleteProductDto";

export class DeleteProductController {
    constructor (
        private deleteProductUseCase: DeleteProductUseCase
    ){}

    async handle(request: Request, response: Response) {
        try {
            const idProduct: string = request.query.id as string
            if (!idProduct) return response.sendStatus(400)

            await this.deleteProductUseCase.execute({ id: idProduct })

            return response.sendStatus(200)
        } catch (error) {
            console.error(error);
            return response.sendStatus(500)
        }
    }
}