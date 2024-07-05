import { ProdutoPrisma } from "@prisma/client/";
import { Produto } from "../../entities/Produto";
import { prismaClient } from "../../prisma";
import { IProdutoRepository } from "../IProdutoRepository";

export class ProdutoRepositoryPrisma implements IProdutoRepository {
    async save (produto: Produto):Promise<void> {
        // mapeiaproduto
        const mapProduto: ProdutoPrisma = {
            id: produto.id.toString(),
            amout: produto.amount,
            name: produto.name,
            price: produto.price,
        }

        // save
        const novoProduto = await prismaClient.produtoPrisma.create({
            data: mapProduto
        })
    }
}