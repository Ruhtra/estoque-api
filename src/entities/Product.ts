import z from "zod";
import { Id } from "./types/Id";
import { Ingredient } from "./Ingredient";
import { Stock } from "./Stock";
import { ObjectId } from "mongodb";
import { MeasureType } from "./MesureTypes";

export type ProductProps = {
    id: Id;
    name: string;

    readonly ingredients?: Ingredient
    readonly stock?: Stock
    readonly measureType: MeasureType
};

export class Product {
    private constructor(private props: ProductProps) {
        this.validate(props)
    }


    private validate(produto: ProductProps) {
        const schema = z.object({
            id: z.string(),
            name: z.string().min(1).max(50),
            // amount: z.number().nonnegative(),
            // price: z.number().positive()
        });

        schema.parse(produto);
    }

    public static create(name: string, measureType) {
        return new Product({
            id: new ObjectId().toString(),
            name,
            
            stock: Stock.create(),
            measureType: measureType
        });
    }

    public static with(props: ProductProps) {
        return new Product(props);
    }

    public get id() {
        return this.props.id;
    }

    public get name() {
        return this.props.name;
    }

    public get ingredients() {
        return this.props.ingredients;
    }

    public get stock() {
        return this.props.stock;
    }
    public get measureType() {
        return this.props.measureType;
    }

}
