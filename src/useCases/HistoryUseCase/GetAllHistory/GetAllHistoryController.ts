import { Request, Response } from "express";
import { GetAllHistoryUseCase } from "./GetAllHistoryUseCase";

export class GetAllHistoryController {
    constructor(
        private getAllHistoryUseCase: GetAllHistoryUseCase
    ) {}

    async handle(request:  Request, response: Response) {
        try {
            const hsitories = await this.getAllHistoryUseCase.execute()
            return response.json(hsitories)
        } catch (error) {
            console.log(error);
            return response.sendStatus(500)
        }
    }
}