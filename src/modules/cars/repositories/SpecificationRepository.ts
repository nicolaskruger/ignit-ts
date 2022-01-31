import { Specification } from '../model/Specification'
import { ISpecificationRepository } from './ISpecificationRepository'

export class SpecificationRepository implements ISpecificationRepository {
    private specificationList: Specification[] = []

    create (specification: Specification): void {
      this.specificationList.push(specification)
    }
}
