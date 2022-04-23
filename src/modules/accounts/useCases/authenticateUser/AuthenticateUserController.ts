import { Request, Response } from 'express'
import { ILoginDTO } from '../../dtos/ILoginDTO'
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'

export class AuthenticateUserController {
    private useCase: AuthenticateUserUseCase

    constructor (useCase: AuthenticateUserUseCase) {
      this.useCase = useCase
    }

    async handle (req: Request<{}, {}, ILoginDTO>, res: Response) {
      return res.status(200).json(await this.useCase.execute(req.body))
    }
}
