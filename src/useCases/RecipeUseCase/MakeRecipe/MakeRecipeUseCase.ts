import { IProdutoRepository } from "../../../respositories/IProdutoRepository";
import { IRecipeRepository } from "../../../respositories/IRecipeRepository";
import { MakeRecipeRequestDto } from "./MakeRecipeDto";

export class MakeRecipeUseCase {
    constructor(
        private recipeRepository: IRecipeRepository,
        private produtoRepository: IProdutoRepository
    ) { }

    async execute({ id }: MakeRecipeRequestDto) {
        const recipe = await this.recipeRepository.findById(id)
        if (!recipe) throw new Error("Recipe não foi encontrada")

        // verifica se todos os produtos contém a quantidade para ser feito
        recipe.ingredients.forEach(e => {
            if (e.quantity > e.produto.amount) throw new Error(`Produto ${e.produto.name} em falta no estoque`)
        })

        // subtrai de todos os produtos
        recipe.ingredients.forEach(async e => {
            await this.produtoRepository.subtrair(e.produto.id, e.quantity)
        })

        // armazena no log de registros
        // naõ temos ainda
    }
}