import z from "zod";
import { Id } from "./types/Id";
import { Ingredient } from "./Item";
import { Stock } from "./Sotck";
import { ObjectId } from "mongodb";

export type ProductProps = {
    id: Id;
    name: string;
    // price: number;
    // amount: number;

    ingredients?:    Ingredient[]
    stock?: Stock
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

    public static create(name: string) {
        return new Product({
            id: new ObjectId().toString(),
            name,
            stock: Stock.create()
            // price,
            // amount: 0,
        });
    }

    public static with(props: ProductProps) {
        return new Product(props);
    }

    public get id() {
        return this.props.id;
    }

    public get name(){
        return this.props.name;
    }

    public get ingredients() {
        return this.props.ingredients;
    }

    public get stock(){
        return this.props.stock;
    }

    // public get price(){
    //     return this.props.price;
    // }

    // public get amount(){
    //     return this.props.amount;
    // }

    // public increaseAmount(amount: number){
    //     this.props.amount += amount;
    // }

    // public decreaseAmount(amount: number){
    //     this.props.amount -= amount;
    // }

}
