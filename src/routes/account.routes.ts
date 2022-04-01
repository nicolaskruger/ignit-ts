import { Request, Response, Router } from 'express'
import { container } from 'tsyringe'
import { ICreateUserDTO } from '../modules/accounts/dtos/ICreateUserDTO'
import { CreateUserController } from '../modules/accounts/useCases/CreateUserController'

const accountRoutes = Router()

accountRoutes.post('/', async (req: Request<{}, {}, ICreateUserDTO>, res: Response) => {
  return await container.resolve(CreateUserController).handle(req, res)
})

export {
  accountRoutes
}
