import { Produto } from "../../../entities/Produto";

export interface CreateProdutoRequestDto extends Pick<
    Produto,
    'name' |
    'price'
> {}