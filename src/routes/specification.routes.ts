import { Request, Router } from 'express'
import { createSpecificationController } from '../modules/cars/useCases/createSpecification'
import { findSpecificationController } from '../modules/cars/useCases/findSpecificationByName'

type SpecificationRequest = {
    name: string,
    description: string,
}

export const specficationRoutes = Router()

specficationRoutes.get('/by_name/:name', (req: Request<{name: string}, {}, {}>, res) => {
  return findSpecificationController.handle(req, res)
})

specficationRoutes.post('/', (req: Request<{}, {}, SpecificationRequest>, res) => {
  return createSpecificationController.handle(req, res)
})
