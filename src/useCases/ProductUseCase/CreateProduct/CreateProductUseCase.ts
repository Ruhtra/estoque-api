import { Product } from "../../../entities/Product";
import { IMeasureTypeRepository } from "../../../respositories/IMeasureTypeRepository";
import { IProductRepository } from "../../../respositories/IProductRepository";
import { IUseCase } from "../../IUseCase";
import { CreateProductRequestDto } from "./CreateProductDto";

export class CreateProductUseCase implements IUseCase<CreateProductRequestDto, void> {
    constructor(
        private ProductRepository: IProductRepository,
        private MeasureTypeRepository: IMeasureTypeRepository
    ) { }

    async execute({ name, measureType: measureTypeName }: CreateProductRequestDto): Promise<void> {
        const measureType = await this.MeasureTypeRepository.getByName(measureTypeName)
        if (!measureType) throw new Error(`Measure type {${measureTypeName}} not found`);

        const productCriado = Product.create(name, measureType)
        await this.ProductRepository.save(productCriado)
    }
}