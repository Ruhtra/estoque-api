import { Request, Response } from "express";
import { GetAllMeasureTypeUseCase } from "./GetAllMeasureTypeUseCase";

export class GetAllMeasureTypeController {
    constructor (
        private getAllMeasureTypeUseCase: GetAllMeasureTypeUseCase
    ) {}
    async handle(request: Request, response: Response) {
        try {
            const getAllMeasureTypes = await this.getAllMeasureTypeUseCase.execute()
            return response.json(getAllMeasureTypes)

        } catch (error) {
            console.error(error);
            return response.sendStatus(500)
        }
    }
}