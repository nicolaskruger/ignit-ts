import { Request, Response, Router } from 'express'
import { container } from 'tsyringe'
import { ICreateUserDTO } from '../modules/accounts/dtos/ICreateUserDTO'
import { ILoginDTO } from '../modules/accounts/dtos/ILoginDTO'
import { AuthenticateUserController } from '../modules/accounts/useCases/authenticateUser/AuthenticateUserController'
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController'

const accountRoutes = Router()

accountRoutes.post('/', async (req: Request<{}, {}, ICreateUserDTO>, res: Response) => {
  return await container.resolve(CreateUserController).handle(req, res)
})

accountRoutes.post('/login', async (req: Request<{}, {}, ILoginDTO>, res: Response) => {
  return await container.resolve(AuthenticateUserController).handle(req, res)
})

export {
  accountRoutes
}
