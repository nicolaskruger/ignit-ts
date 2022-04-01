import { Request, Response } from 'express'
import { ICreateUserDTO } from '../dtos/ICreateUserDTO'
import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
    private createUserUseCase:CreateUserUseCase;

    constructor (createUserUseCase: CreateUserUseCase) {
      this.createUserUseCase = createUserUseCase
    }

    async handle (req:Request<{}, {}, ICreateUserDTO>, res: Response) {
      try {
        await this.createUserUseCase.execute(req.body)
        return res.status(201).json({
          msg: 'categoria criada con sucesso'
        })
      } catch (error) {
        const erroType = error as Error
        return res.status(409).json({
          msg: erroType.message
        })
      }
    }
}