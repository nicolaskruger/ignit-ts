import { Request, Router } from 'express'
import multer from 'multer'
import { CategoriesRequest } from '../modules/cars/model/Category'
import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { listCategoryController } from '../modules/cars/useCases/listCategory'
export const categoriesRoutes = Router()

const upload = multer({
  dest: './tmp'
})

categoriesRoutes.post('/', (req: Request<{}, {}, CategoriesRequest>, res) => {
  return createCategoryController.handle(req, res)
})

categoriesRoutes.get('/', (req, res) => {
  const all = listCategoryController.handle(req, res)

  return res.json(all)
})

categoriesRoutes.post('/import', upload.single('file'), (req, res) => {
  const { file } = req

  console.log(file)

  return res.send()
})
