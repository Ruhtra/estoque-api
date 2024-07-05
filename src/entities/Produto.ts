import { z } from "zod";
import { Id } from "./types/Id";

export class Produto {
    public readonly id: Id

    public name: string
    public amount: number
    public price: number


    private constructor(data: Produto) {
        Object.assign(this, data)
    }

    private static validate(produto: Produto) {
        const schema = z.object({
            name: z.string().min(1).max(50),
            amount: z.number().nonnegative(),
            price: z.number().positive()
        });

        schema.parse(produto);

        // if (!validationResult.success) {
        //     throw new Error(`Validation failed: ${validationResult.error.errors}`);
        // }
    }

    public static create(name: string, price: number): Produto {
        const data = {
            id: new Id(),
            name: name,
            amount: 0,
            price: price
        };
    
        this.validate(data);
    
        return new Produto(data);
    }
}