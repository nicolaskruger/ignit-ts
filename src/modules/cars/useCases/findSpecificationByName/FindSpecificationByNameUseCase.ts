import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository'

export class FindSpecificationByNameUseCase {
  constructor (private specificationRepository:SpecificationRepository) {
    this.specificationRepository = specificationRepository
  }

  execute (name:string) {
    return this.specificationRepository.findByName(name)
  }
}
