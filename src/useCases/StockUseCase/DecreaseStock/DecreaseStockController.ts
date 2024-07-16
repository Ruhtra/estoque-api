import { Request, Response } from "express";
import { DecreaseStockUseCase } from "./DecreaseStockUseCase";
import { DecreaseStockRequestDto } from "./DecreaseStockDto";

export class DecreaseStockController {
    constructor(
        private decreaseStockUseCase: DecreaseStockUseCase
    ) { }

    async handle(request: Request, response: Response) {
        try {
            const bodyRequest: DecreaseStockRequestDto = request.body as DecreaseStockRequestDto

            await this.decreaseStockUseCase.execute(bodyRequest)
            return response.send(200)
        } catch (error) {
            console.log(error);
            return response.sendStatus(500)
        }
    }
}