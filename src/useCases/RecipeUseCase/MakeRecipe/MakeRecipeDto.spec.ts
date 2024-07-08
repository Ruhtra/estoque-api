import { ProductRepositoryLocal } from "../../../respositories/implementations/Local/ProductRepositoryLocal";
import { RecipeRepositoryLocal } from "../../../respositories/implementations/Local/RecipeRepositoryLocal";
import { MakeRecipeUseCase } from "./MakeRecipeUseCase";

describe("CreateProdutoUseCase", () => {
    const produtoLocalRepository = new ProductRepositoryLocal();
    const recipeRepositoryLocal = new RecipeRepositoryLocal();
    const makeRecipeUseCase = new MakeRecipeUseCase(recipeRepositoryLocal, produtoLocalRepository);

    describe("success", () => {
        test("fazendo uma receita", async () => {
            const id: string = "66881156a0fb7fb40a8c17d6"

            expect(async () => {
                await makeRecipeUseCase.execute({ id })
            }).not.toThrow()
        });
    })
})