import { Request, Router } from 'express'
import { v4 } from 'uuid'

export const categoriesRoutes = Router()

type Categories = {
    id: string,
    name: string,
    description: string,
    createdAt: string,
}

type CategoriesRequest = Pick<Categories, 'name' | 'description'>;

const categories:Categories[] = []

categoriesRoutes.post('/', (req:Request<{}, {}, CategoriesRequest>, res) => {
  const { name, description } = req.body

  categories.push({
    id: v4(),
    name,
    description,
    createdAt: new Date().toDateString()
  })

  return res.status(201).json({
    name
  })
})
