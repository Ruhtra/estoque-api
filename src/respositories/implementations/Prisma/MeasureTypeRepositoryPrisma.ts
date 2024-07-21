import { MeasureType } from "../../../entities/MesureTypes";
import { prismaClient } from "../../../prisma";
import { IMeasureTypeRepository } from "../../IMeasureTypeRepository";

export class MeasureTypeRepositoryPrisma implements IMeasureTypeRepository {
    async getByName(name: string): Promise<MeasureType> {
        const measureType =  await prismaClient.mesureType.findUnique({
            where: {
                name: name
            }
        })

        return MeasureType.with({
            id: measureType.id,
            name: measureType.name,
        })
    }
    async getAll(): Promise<MeasureType[]> {
        const measureTypes = await prismaClient.mesureType.findMany({})

        return measureTypes.map(mt => {
            return MeasureType.with({
                id: mt.id,
                name: mt.name
            })
        })
    }
}