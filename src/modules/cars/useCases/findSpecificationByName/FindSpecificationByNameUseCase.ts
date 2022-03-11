import { ISpecificationRepository } from '../../repositories/ISpecificationRepository'

export class FindSpecificationByNameUseCase {
  constructor (private specificationRepository:ISpecificationRepository) {
    this.specificationRepository = specificationRepository
  }

  execute (name:string) {
    return this.specificationRepository.findByName(name)
  }
}
