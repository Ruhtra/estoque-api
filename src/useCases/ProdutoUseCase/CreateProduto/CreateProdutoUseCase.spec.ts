import { ZodError } from "zod"
import { Produto } from "../../../entities/Produto"
import { ProdutoLocalRepository } from "../../../respositories/implementations/ProdutoLocalRepository"
import { CreateProdutoUseCase } from "./CreateProdutoUseCase"

export function validZodTypeError(error: any, path: string, code: string) {
    expect(error).toBeInstanceOf(ZodError);
    
    const zodError = error as ZodError;
    expect(zodError.errors.length).toEqual(1);
    expect(zodError.errors[0].path).toEqual([path]);
    expect(zodError.errors[0].code).toBe(code);
}

describe("CreateProdutoUseCase", () => {
    const produtoLocalRepository = new ProdutoLocalRepository();
    const createProdutoUseCase = new CreateProdutoUseCase(produtoLocalRepository);

    describe("success", () => {
        test("Criação de produto", async () => {
            const produto = Produto.create("cebola", 0.3);
    
            expect(async () => {
                await createProdutoUseCase.execute(produto);
            }).not.toThrow();
        });
    })


    describe("error", () => {
        test("Nome Null", async () => {
            try {
                const produto = Produto.create(null, 1);
                await createProdutoUseCase.execute(produto)

                fail('Esperava-se que a criação do produto falhasse devido ao preço inválido.');
            } catch (error) {
                validZodTypeError(error, "name", "invalid_type");
            }
        });
        test("Nome pequeno", async () => {
            try {
                const produto = Produto.create("", 1);
                await createProdutoUseCase.execute(produto)

                fail('Esperava-se que a criação do produto falhasse devido ao preço inválido.');
            } catch (error) {
               validZodTypeError(error, "name", "too_small");
            }
        });
        test("Nome grande", async () => {
            try {
                const produto = Produto.create('a'.repeat(51), 1);
                await createProdutoUseCase.execute(produto)

                fail('Esperava-se que a criação do produto falhasse devido ao preço inválido.');
            } catch (error) {
               validZodTypeError(error, "name", "too_big");
            }
        });
        

        test("Preço null", async () => {
            try {
                const produto = Produto.create("cebola", null);
                await createProdutoUseCase.execute(produto)

                fail('Esperava-se que a criação do produto falhasse devido ao preço inválido.');
            } catch (error) {
               validZodTypeError(error, 'price', 'invalid_type');
            }
        });
    
        test("Preço negativo", async () => {
            try {
                const produto = Produto.create("cebola", -1);
                await createProdutoUseCase.execute(produto)

                fail('Esperava-se que a criação do produto falhasse devido ao preço inválido.');
            } catch (error) {
               validZodTypeError(error, 'price', 'too_small');
            }
        });
    })
});