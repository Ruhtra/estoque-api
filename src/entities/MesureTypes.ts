import { Id } from "./types/Id";
import { ObjectId } from "mongodb";
import { Product } from "@prisma/client";

export type MeasureTypeProps = {
    id: Id;
    name: string

    readonly product?: Product
};

export class MeasureType {
    private constructor(private props: MeasureTypeProps) { }

    public static create(name: string, product: Product) {
        return new MeasureType({
            id: new ObjectId().toString(),
            name: name,
            product: product
        })
    }

    public static with(props: MeasureTypeProps) {
        return new MeasureType(props);
    }

    public get id() {
        return this.props.id;
    }
    public get name() {
        return this.props.name;
    }

    public get product() {
        return this.props.product;
    }

}
