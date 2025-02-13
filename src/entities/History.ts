import { ObjectId } from "mongodb"
import { Stock } from "./Stock"
import { Id } from "./types/Id"


export enum OperationHistoryEnum {
    increase = 'increase',
    decrease = 'decrease'
}

export type HistoryProps = {
    id: Id
    amount: number
    // price: number
    operation: OperationHistoryEnum
    readonly createdAt: Date

    readonly stock: Stock
}

export class History {
    private constructor(private props: HistoryProps) { }

    public static with(props: HistoryProps) {
        return new History(props)
    }

    public static create(
        amount: number,
        // price: number,
        operation: OperationHistoryEnum,
        stock: Stock
    ) {
        return new History({
            id: new ObjectId().toString(),
            amount,
            // price,
            operation,
            stock,
            createdAt: new Date()
        })
    }

    public get id() {
        return this.props.id
    }
    public get amount() {
        return this.props.amount
    }
    // public get price() {
    //     return this.props.price
    // }
    public get operation() {
        return this.props.operation
    }
    public get stock() {
        return this.props.stock
    }
    public get createdAt() {
        return this.props.createdAt
    }

}