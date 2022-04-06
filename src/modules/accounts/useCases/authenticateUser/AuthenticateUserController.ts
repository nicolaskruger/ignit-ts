import { Request, Response } from 'express'
import { ILoginDTO } from '../../dtos/ILoginDTO'
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'

export class AuthenticateUserController {
    private useCase: AuthenticateUserUseCase

    constructor (useCase: AuthenticateUserUseCase) {
      this.useCase = useCase
    }

    async handle (req: Request<{}, {}, ILoginDTO>, res: Response) {
      try {
        return res.status(200).json(await this.useCase.execute(req.body))
      } catch (error) {
        const erroType = error as Error
        return res.status(400).json({
          msg: erroType.message
        })
      }
    }
}
