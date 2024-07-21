import { IMeasureTypeRepository } from "../../../respositories/IMeasureTypeRepository";
import { IUseCase } from "../../IUseCase";
import { GetAllMeasureTypeResponseDto } from "./GetAllMeasureTypeDto";

export class GetAllMeasureTypeUseCase implements IUseCase<void, GetAllMeasureTypeResponseDto[]> {
    constructor (
        private measureTypeRepository : IMeasureTypeRepository
    ) {}
    async execute(): Promise<GetAllMeasureTypeResponseDto[]> {
        const measureTypes = await this.measureTypeRepository.getAll()

        return measureTypes.map(mt => {
            return {
                id: mt.id,
                name: mt.name
            }
        })
    }

}