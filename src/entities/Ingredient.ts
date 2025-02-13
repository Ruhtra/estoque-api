import { Recipe } from "@prisma/client";
import { Product } from "./Product";
import { Id } from "./types/Id";

export type ItemProps = {
    id: Id;
    quantity: number

    readonly product?: Product
    readonly recipe?: Recipe
};

export class Ingredient {
    private constructor(private props: ItemProps) {}

    public static with(props: ItemProps) {
        return new Ingredient(props);
    }

    public get id() {
        return this.props.id;
    }
    public get quantity() {
        return this.props.quantity;
    }

    public get product(){
        return this.props.product;
    }
}