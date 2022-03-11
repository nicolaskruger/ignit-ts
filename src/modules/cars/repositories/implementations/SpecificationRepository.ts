import { Specification } from '../../model/Specification'
import { ICreateSpecificationDTO, ISpecificationRepository } from '../ISpecificationRepository'

export class SpecificationRepository implements ISpecificationRepository {
    private specificationList: Specification[];

    constructor () {
      this.specificationList = []
    }

    findByName (name: string): Specification {
      const specification = this.specificationList.find(v => v.name === name)
      if (!specification) { throw new Error('specification dos not exist') }
      return specification as Specification
    }

    create (specification: ICreateSpecificationDTO): void {
      this.specificationList.push(new Specification({ ...specification, createdAt: new Date().toDateString() }))
    }
}
