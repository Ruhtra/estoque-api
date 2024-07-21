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
}