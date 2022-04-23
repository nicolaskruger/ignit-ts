import { Request, Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthentiticated'
import { createSpecificationController } from '../modules/cars/useCases/createSpecification'
import { findSpecificationController } from '../modules/cars/useCases/findSpecificationByName'

type SpecificationRequest = {
    name: string,
    description: string,
}

export const specficationRoutes = Router()

specficationRoutes.get('/by_name/:name', async (req: Request<{name: string}, {}, {}>, res) => {
  return await findSpecificationController().handle(req, res)
})

specficationRoutes.use(ensureAuthenticated)

specficationRoutes.post('/', async (req: Request<{}, {}, SpecificationRequest>, res) => {
  return await createSpecificationController().handle(req, res)
})
