import { CategoriesRepository } from '../../repositories/implementations/CategoryRepositories'
import { CreateCategoryController } from './CreateCategoryController'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

export default () => {
  const categoriesRepository = CategoriesRepository.getInstance()

  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)

  const createCategoryController = new CreateCategoryController(createCategoryUseCase)

  return createCategoryController
}
