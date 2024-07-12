import { Request, Response } from "express";
import { MakeRecipeUseCase } from "./MakeRecipeUseCase";

export class MakeRecipeController {
    constructor(
        private makeRecipeUseCase: MakeRecipeUseCase
    ) {}

    async handle(request: Request, response: Response) {
        try {
            const id: string = request.query.id as string; 
            if (!id) return response.sendStatus(400)

            await this.makeRecipeUseCase.execute({ id })

            return response.send("recipe feita com sucesso")
        } catch (error) {
            console.log(error);
            return response.sendStatus(500)
        }
    }
}