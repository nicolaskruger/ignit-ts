import { ISpecificationRepository } from '../../repositories/ISpecificationRepository'

export class FindSpecificationByNameUseCase {
  constructor (private specificationRepository:ISpecificationRepository) {
    this.specificationRepository = specificationRepository
  }

  async execute (name:string) {
    return await this.specificationRepository.findByName(name)
  }
}
