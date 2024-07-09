import { Request, Response } from "express";
import { GetAllProductUseCase } from "./GetAllProductUseCase";

export class GetAllProductController {
    constructor(
        private getAllProductUseCase: GetAllProductUseCase
    ) {}
    async handle(request: Request, response: Response) {
        try {
            const products = await this.getAllProductUseCase.execute()
            return response.json(products)

        } catch (error) {
            console.error(error);
            return response.sendStatus(500)
        }
    }
}