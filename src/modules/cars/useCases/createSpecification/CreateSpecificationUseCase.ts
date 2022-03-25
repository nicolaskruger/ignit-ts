import { ISpecificationRepository } from '../../repositories/ISpecificationRepository'

type IRequest = {
    name: string,
    description: string
}

export class CreateSpecificationUseCase {
  constructor (private specificationRepository: ISpecificationRepository) {
    this.specificationRepository = specificationRepository
  }

  async execute ({ name, description }:IRequest) {
    await this.specificationRepository
      .create({ name, description })
  }
}
