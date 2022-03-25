import { container } from 'tsyringe'
import { CreateCategoryController } from './CreateCategoryController'

export default () => {
  const createCategoryController = container.resolve(CreateCategoryController)

  return createCategoryController
}
