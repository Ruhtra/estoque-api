import { Item } from "./Item";
import { Id } from "./types/Id";

export type RecipeProps = {
    id: Id;
    name: string
    ingredients: Item[]
};

export class Recipe {
    private constructor(private props: RecipeProps) {}

    public static with(props: RecipeProps) {
        return new Recipe(props);
    }

    public get id() {
        return this.props.id;
    }

    public get name() {
        return this.props.name;
    }

    public get ingredients(){
        return this.props.ingredients;
    }

    public MakeRecipe(): void {    
        //ver se a respon sabilidade de verificar o amount dos itens fica de faot aqui    
        if (this.props.ingredients.some(i => i.product.amount - i.quantity < 0)) {
            throw new Error("Not enough product amount");
        }
        this.props.ingredients.forEach(i => i.product.decreaseAmount(i.quantity))
    }
}