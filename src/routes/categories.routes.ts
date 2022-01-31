import { Request, Router } from 'express'
import { CategoriesRequest } from '../model/Category'
import { CategoriesRepository } from '../repositories/CategoryRepositories'
import { CreateCategoryService } from '../services/CreateCategoryService'

export const categoriesRoutes = Router()

const categoriesRepository = new CategoriesRepository()

const createCategoryService = new CreateCategoryService(categoriesRepository)

categoriesRoutes.post('/', (req:Request<{}, {}, CategoriesRequest >, res) => {
  const { name, description } = req.body

  try {
    const response = createCategoryService.execute({
      name,
      description
    })
    return res.status(201).json(response)
  } catch (error) {
    const erroType = error as Error
    return res.status(409).json({
      msg: erroType.message
    })
  }
})

categoriesRoutes.get('/', (req, res) => {
  const all = categoriesRepository.list()

  return res.json(all)
})
