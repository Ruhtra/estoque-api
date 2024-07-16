import { Request, Response } from "express";
import { GetAllHistoryUseCase } from "./GetAllHistoryUseCase";
import { GetAllHistoryRequestDto } from "./GetAllHistoryDto";

export class GetAllHistoryController {
    constructor(
        private getAllHistoryUseCase: GetAllHistoryUseCase
    ) {}

    async handle(request:  Request, response: Response) {
        try {
            const { operation }: GetAllHistoryRequestDto = request.query as GetAllHistoryRequestDto

            const histories = await this.getAllHistoryUseCase.execute({ operation })
            return response.json(histories)
        } catch (error) {
            console.log(error);
            return response.sendStatus(500)
        }
    }
}