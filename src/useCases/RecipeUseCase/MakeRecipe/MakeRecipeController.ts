import { Request, Response } from "express";
import { MakeRecipeUseCase } from "./MakeRecipeUseCase";
import { Id } from "../../../entities/types/Id";

export class MakeRecipeController {
    constructor(
        private makeRecipeUseCase: MakeRecipeUseCase
    ) {}

    async handle(request: Request, response: Response) {
        try {
            // const id: Id = new Id(request.params.id); 
            const id: string = request.params.id; 

            this.makeRecipeUseCase.execute({ id })
        } catch (error) {
            console.log(error);
            return response.sendStatus(500)
        }
    }
}