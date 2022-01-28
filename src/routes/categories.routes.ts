import { Request, Router } from 'express'
import { CategoriesRequest } from '../model/Category'
import { CategoriesRepository } from '../repositories/CategoryRepositories'

export const categoriesRoutes = Router()

const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (req:Request<{}, {}, CategoriesRequest >, res) => {
  const { name, description } = req.body

  categoriesRepository.create({
    name,
    description
  })

  return res.status(201).json({
    name
  })
})
