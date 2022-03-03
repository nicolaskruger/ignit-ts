import { SpecificationRepository } from '../../repositories/SpecificationRepository'
import { FindSpecificationByNameController } from './FindSpecificationByNameController'
import { FindSpecificationByNameUseCase } from './FindSpecificationByNameUseCase'

const specificationRepository = new SpecificationRepository()

const findSpecificationUseCase = new FindSpecificationByNameUseCase(specificationRepository)

const findSpecificationController = new FindSpecificationByNameController(findSpecificationUseCase)

export {
  findSpecificationController,
  specificationRepository
}
