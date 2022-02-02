import { SpecificationRepository } from '../repositories/SpecificationRepository'

export class FindSpecificationByNameService {
  constructor (private specificationRepository:SpecificationRepository) {
    this.specificationRepository = specificationRepository
  }

  execute (name:string) {
    return this.specificationRepository.findByName(name)
  }
}
