import { CategoriesRepository } from '../../repositories/implementations/CategoryRepositories'
import { ListCategoryController } from './ListCategoryController'
import { ListCategoryUseCase } from './ListCategoryUseCase'

const categoryRepository = CategoriesRepository.getInstance()
const listCategoryUseCase = new ListCategoryUseCase(categoryRepository)
export const listCategoryController = new ListCategoryController(listCategoryUseCase)