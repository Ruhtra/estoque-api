import { Request, Response } from "express";
import { IncreaseStockUseCase } from "./IncreaseStockUseCase";
import { IncreaseStockRequestDto } from "./IncreaseStockDto";

export class IncreaseStockController {
    constructor(
        private increaseStockUseCase: IncreaseStockUseCase
    ) {}

    async handle(request: Request, response: Response) {
        try {
            const bodyRequest: IncreaseStockRequestDto = request.body as IncreaseStockRequestDto

            await this.increaseStockUseCase.execute(bodyRequest)
            return response.send(200)
        } catch (error) {
            console.log(error);
            return response.sendStatus(500)
        }
    }
}