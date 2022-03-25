import { Request, Router } from 'express'
import multer from 'multer'
import createCategoryControler from '../modules/cars/useCases/createCategory'
import { CategoriesRequest } from '../modules/cars/entities/Category'
import { importCategoryController } from '../modules/cars/useCases/importCategory'
import { listCategoryController } from '../modules/cars/useCases/listCategory'
export const categoriesRoutes = Router()

const upload = multer({
  dest: './tmp'
})

categoriesRoutes.post('/', async (req: Request<{}, {}, CategoriesRequest>, res) => {
  return await createCategoryControler().handle(req, res)
})

categoriesRoutes.get('/', async (req, res) => {
  const all = await listCategoryController.handle(req, res)

  return res.json(all)
})

categoriesRoutes.post('/import', upload.single('file'), async (req, res) => {
  return await importCategoryController.handle(req, res)
})
