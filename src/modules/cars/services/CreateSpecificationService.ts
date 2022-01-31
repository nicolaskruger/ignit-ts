import { Specification } from '../model/Specification'
import { ISpecificationRepository } from '../repositories/ISpecificationRepository'

type IRequest = {
    name: string,
    description: string
}

export class CreateSpecificationService {
    private specificationRepository:ISpecificationRepository;

    constructor (specificationRepository: ISpecificationRepository) {
      this.specificationRepository = specificationRepository
    }

    execute ({ name, description }:IRequest) {
      this.specificationRepository
        .create(new Specification({ name, description, createdAt: new Date().toDateString() }))
    }
}
