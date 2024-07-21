import { MeasureType } from "../entities/MesureTypes";

export interface IMeasureTypeRepository {
    getByName: (name: string) => Promise<MeasureType>
}