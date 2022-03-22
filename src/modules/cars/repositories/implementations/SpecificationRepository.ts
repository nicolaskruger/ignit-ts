import { Specification } from '../../entities/Specification'
import { ICreateSpecificationDTO, ISpecificationRepository } from '../ISpecificationRepository'

export class SpecificationRepository implements ISpecificationRepository {
    private specificationList: Specification[];

    private static INSTACE:ISpecificationRepository;

    private constructor () {
      this.specificationList = []
    }

    static getInstance () {
      if (!this.INSTACE) {
        this.INSTACE = new SpecificationRepository()
      }
      return this.INSTACE
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
