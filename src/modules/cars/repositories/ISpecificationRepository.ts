import { Specification } from '../entities/Specification'

export interface ICreateSpecificationDTO {
    name: string,
    description: string,
}

export interface ISpecificationRepository {
    create(specification: ICreateSpecificationDTO):void
    findByName(name: string):Specification
}
