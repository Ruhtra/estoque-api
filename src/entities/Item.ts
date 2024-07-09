import { Product } from "./Product";
import { Id } from "./types/Id";

export type ItemProps = {
    id: Id;
    quantity: number
    product: Product
};

export class Item {
    private constructor(private props: ItemProps) {}

    public static with(props: ItemProps) {
        return new Item(props);
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