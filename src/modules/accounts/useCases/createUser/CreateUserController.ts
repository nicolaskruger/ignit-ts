import { Request, Response } from 'express'
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
    private createUserUseCase:CreateUserUseCase;

    constructor (createUserUseCase: CreateUserUseCase) {
      this.createUserUseCase = createUserUseCase
    }

    async handle (req:Request<{}, {}, ICreateUserDTO>, res: Response) {
        await this.createUserUseCase.execute(req.body)
        return res.status(201).json({
          msg: 'usuario criado com sucesso'
        })
    }
}
