import { ObjectId } from "mongodb";
import { Id } from "../../../entities/types/Id";
import { ProdutoRepositoryLocal } from "../../../respositories/implementations/Local/ProdutoRepositoryLocal";
import { RecipeRepositoryLocal } from "../../../respositories/implementations/Local/RecipeRepositoryLocal";
import { MakeRecipeUseCase } from "./MakeRecipeUseCase";

describe("CreateProdutoUseCase", () => {
    const produtoLocalRepository = new ProdutoRepositoryLocal();
    const recipeRepositoryLocal = new RecipeRepositoryLocal();
    const makeRecipeUseCase = new MakeRecipeUseCase(recipeRepositoryLocal, produtoLocalRepository);

    describe("success", () => {
        test("fazendo uma receita", async () => {
            const id: Id = new ObjectId("66881156a0fb7fb40a8c17d6")

            expect(async () => {
                await makeRecipeUseCase.execute({ id })
            }).not.toThrow()
        });
    })
})