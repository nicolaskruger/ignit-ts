import { Request, Router } from 'express'
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository'
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService'
import { FindSpecificationByNameService } from '../modules/cars/services/FindSpecificationByNameService'

type SpecificationRequest = {
    name: string,
    description: string,
}

export const specficationRoutes = Router()

const specificationRepository = new SpecificationRepository()

const createSpecificationService = new CreateSpecificationService(specificationRepository)

const findSpecificationService = new FindSpecificationByNameService(specificationRepository)

specficationRoutes.get('/by_name/:name', (req: Request<{name: string}, {}, {}>, res) => {
  const { name } = req.params

  try {
    return res.json(findSpecificationService.execute(name))
  } catch (erro) {
    return res.status(400).json({
      msg: `specification with this name doesn't exists name: ${name}`
    })
  }
})

specficationRoutes.post('/', (req: Request<{}, {}, SpecificationRequest>, res) => {
  const { name, description } = req.body

  try {
    createSpecificationService.execute({
      name,
      description
    })

    return res.status(201).send()
  } catch (error) {
    const errorType = error as Error

    return res.status(400).json({
      msg: errorType.message
    })
  }
})
