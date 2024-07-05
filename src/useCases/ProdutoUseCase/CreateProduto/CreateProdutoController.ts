import { Request, Response } from "express";
import { CreateProdutoUseCase } from "./CreateProdutoUseCase";
import { CreateProdutoRequestDto } from "./CreateProdutoDto";

export class CreateProdutoController {
    constructor(
        private createProduUseCase: CreateProdutoUseCase
    ) { }

    async handle(request: Request, response: Response) {
        try {
            const produto: CreateProdutoRequestDto = request.body as CreateProdutoRequestDto;
            await this.createProduUseCase.execute(produto)

            return response.sendStatus(200)
        } catch (error) {
            console.error(error);
            return response.sendStatus(500)
        }
    }
}