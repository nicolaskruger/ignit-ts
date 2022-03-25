import { container } from 'tsyringe'
import { CreateSpecificationController } from './CreateSpecificationController'

export const createSpecificationController = () => container.resolve(CreateSpecificationController)
