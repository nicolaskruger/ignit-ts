import { Request, response, Router } from 'express'
import { CategoriesRequest } from '../model/Category'
import { CategoriesRepository } from '../repositories/CategoryRepositories'

export const categoriesRoutes = Router()

const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (req:Request<{}, {}, CategoriesRequest >, res) => {
  const { name, description } = req.body

  if (categoriesRepository.existsByName(name)) {
    return res.status(409).json({
      msg: 'this category already exists'
    })
  }

  categoriesRepository.create({
    name,
    description
  })

  return res.status(201).json({
    name
  })
})

categoriesRoutes.get('/', (req, res) => {
  const all = categoriesRepository.list()

  return res.json(all)
})
