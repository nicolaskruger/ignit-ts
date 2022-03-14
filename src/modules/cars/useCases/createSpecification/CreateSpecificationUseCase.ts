import { ISpecificationRepository } from '../../repositories/ISpecificationRepository'

type IRequest = {
    name: string,
    description: string
}

export class CreateSpecificationUseCase {
  constructor (private specificationRepository: ISpecificationRepository) {
    this.specificationRepository = specificationRepository
  }

  execute ({ name, description }:IRequest) {
    this.specificationRepository
      .create({ name, description })
  }
}