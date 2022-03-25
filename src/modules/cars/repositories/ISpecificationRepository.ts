import { Specification } from '../entities/Specification'

export interface ICreateSpecificationDTO {
    name: string,
    description: string,
}

export interface ISpecificationRepository {
    create(specification: ICreateSpecificationDTO):Promise<void>
    findByName(name: string):Promise<Specification>
}
