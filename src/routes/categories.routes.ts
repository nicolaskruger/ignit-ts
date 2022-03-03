import { Request, Router } from 'express'
import { CategoriesRequest } from '../modules/cars/model/Category'
import { categoriesRepository, createCategoryController } from '../modules/cars/useCases/createCategory'
export const categoriesRoutes = Router()

categoriesRoutes.post('/', (req: Request<{}, {}, CategoriesRequest>, res) => {
  return createCategoryController.handle(req, res)
})

categoriesRoutes.get('/', (req, res) => {
  const all = categoriesRepository.list()

  return res.json(all)
})
