import { Product } from "./Product"
import { Id } from "./types/Id"

export type StockProps = {
    id: Id,
    amount: number
    product: Product
    
}

export class Stock {
    private constructor(private props: StockProps) {}

    public static with(props: StockProps) {
        return new Stock(props);
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


    
    public increaseAmount(amount: number){
        // validação de se pode executar essa ção
        this.props.amount += amount;
    }

    public decreaseAmount(amount: number){
        // validação de se pode executar essa ção
        this.props.amount -= amount;
    }
}