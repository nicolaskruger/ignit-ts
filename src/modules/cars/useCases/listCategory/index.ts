import { container } from 'tsyringe'
import { ListCategoryController } from './ListCategoryController'

export const listCategoriesController = () => {
  return container.resolve(ListCategoryController)
}
