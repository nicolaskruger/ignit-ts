import { categoriesRepository } from '../createCategory'
import { ListCategoryController } from './ListCategoryController'
import { ListCategoryUseCase } from './ListCategoryUseCase'

const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository)
export const listCategoryController = new ListCategoryController(listCategoryUseCase)
