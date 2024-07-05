import { ProdutoPrisma } from "@prisma/client/";
import { Produto } from "../../../entities/Produto";
import { prismaClient } from "../../../prisma";
import { IProdutoRepository } from "../../IProdutoRepository";
import { Id } from "../../../entities/types/Id";

export class ProdutoRepositoryPrisma implements IProdutoRepository {
    async save(produto: Produto): Promise<void> {
        // save
        const novoProduto = await prismaClient.produtoPrisma.create({
            data: {
                id: produto.id.toString(),
                amount: produto.amount,
                name: produto.name,
                price: produto.price
            },
        })
    }
    async subtrair(id: Id, quantity: number): Promise<void> {
        throw new Error("Not implemented");
        
        // // 1. Obter o produto pelo ID
        // const produto = await prismaClient.produtoPrisma.findUnique({
        //     where: { id: id.toString() },
        // });

        // if (!produto) {
        //     throw new Error(`Produto com ID ${id} não encontrado.`);
        // }

        // // 2. Calcular o novo amount após a subtração da quantidade
        // const novoAmount = produto.amount - quantity;

        // // 3. Atualizar o registro no banco de dados
        // await prismaClient.produtoPrisma.update({
        //     where: { id: id.toString() },
        //     data: { amount: novoAmount },
        // });
    }
}