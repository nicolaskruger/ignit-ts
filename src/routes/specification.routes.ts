import { Request, Router } from 'express'
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository'
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService'

type SpecificationRequest = {
    name: string,
    description: string,
}

export const specficationRoutes = Router()

const specificationRepository = new SpecificationRepository()

const createSpecificationService = new CreateSpecificationService(specificationRepository)

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
