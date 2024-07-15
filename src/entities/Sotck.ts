import { ObjectId } from "mongodb"
import { History, OperationHistoryEnum } from "./History"
import { Product } from "./Product"
import { Id } from "./types/Id"

export type StockProps = {
    id: Id,
    amount: number

    product?: Product
    history?: History[]
}

export class Stock {
    private constructor(private props: StockProps) {}

    public static with(props: StockProps) {
        return new Stock(props);
    }

    public static create() {
        return new Stock({
            id: new ObjectId().toString(),
            amount: 0,
        })
    }

    public get id() {
        return this.props.id;
    }

    public get amount() {
        return this.props.amount;
    }

    public get product(){
        return this.props.product;
    }

    public get history(){
        return this.props.history
    }



    
    public increaseAmount(amount: number, price: number){
        this.props.amount += amount;
        // this.props.history = []
        this.props.history.push(History.create(amount, price, OperationHistoryEnum.increase))
    }

    public decreaseAmount(amount: number){
        this.props.amount -= amount;
        this.props.history = []
        this.props.history.push(History.create(amount, 0, OperationHistoryEnum.decrease))
    }
}