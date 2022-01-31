import { Specification } from '../model/Specification'

export interface ISpecificationRepository {
    create(specification:Specification):void
}
