import { Request, Router } from 'express'
import { CategoriesRequest, Category } from '../model/Category'

export const categoriesRoutes = Router()

const categories:Category[] = []

categoriesRoutes.post('/', (req:Request<{}, {}, CategoriesRequest >, res) => {
  const { name, description } = req.body

  categories.push(new Category({
    name,
    description,
    createdAt: new Date().toDateString()
  }))

  return res.status(201).json({
    name
  })
})
