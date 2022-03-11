import { Request, Router } from 'express'
import { CategoriesRequest } from '../modules/cars/model/Category'
import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { listCategoryController } from '../modules/cars/useCases/listCategory'
export const categoriesRoutes = Router()

categoriesRoutes.post('/', (req: Request<{}, {}, CategoriesRequest>, res) => {
  return createCategoryController.handle(req, res)
})

categoriesRoutes.get('/', (req, res) => {
  const all = listCategoryController.handle(req, res)

  return res.json(all)
})
