import { container } from 'tsyringe'
import { FindSpecificationByNameController } from './FindSpecificationByNameController'

export const findSpecificationController = () => container.resolve(FindSpecificationByNameController)
