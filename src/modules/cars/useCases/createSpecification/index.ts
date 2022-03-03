import { specificationRepository } from '../findSpecificationByName'
import { CreateSpecificationController } from './CreateSpecificationController'
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'

const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository)
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase)

export {
  createSpecificationController
}
