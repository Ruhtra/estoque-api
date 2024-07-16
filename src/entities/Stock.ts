import { ObjectId } from "mongodb"
import { History, OperationHistoryEnum } from "./History"
import { Product } from "./Product"
import { Id } from "./types/Id"

export type StockProps = {
    id: Id,
    amount: number

    readonly product?: Product
    readonly history?: History[] 
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
            history : []
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

        // const history = History.create(amount, price, OperationHistoryEnum.increase);
        // this.props.history.push(history);
    }

    public decreaseAmount(amount: number){
        if (this.props.amount < amount) throw new Error("Value is higher than current stock")

        this.props.amount -= amount;
        
        // const history = History.create(amount, 0, OperationHistoryEnum.decrease);
        // this.props.history.push(history);
    }
}