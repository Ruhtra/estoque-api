import { ObjectId } from "mongodb"
import { Stock } from "./Sotck"
import { Id } from "./types/Id"


export enum OperationEnum {
    increase = 'increase',
    decrease = 'decrease'
}

export type HistoryProps = {
    id: Id
    amount: number
    price: number
    operation: OperationEnum

    stock?: Stock
}

export class History {
    private constructor(private props: HistoryProps) { }

    public static with(props: HistoryProps) {
        return new History(props)
    }

    public static create(
        amount: number,
        price: number,
        operation: OperationEnum,
    ) {
        return new History({
            id: new ObjectId().toString(),
            amount,
            price,
            operation
        })
    }

    public get id() {
        return this.props.id
    }
    public get amount() {
        return this.props.amount
    }
    public get price() {
        return this.props.price
    }
    public get operation() {
        return this.props.operation
    }
    public get stock() {
        return this.props.stock
    }

}