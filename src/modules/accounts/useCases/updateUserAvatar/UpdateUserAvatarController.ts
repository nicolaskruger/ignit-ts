import { Express, Request, Response } from 'express'
import { AppError } from '../../../../errors/AppError'
import { UpdateUserAvatarUseCase } from './UpdateUserAvatarUseCase'

export class UpdateUserAvatarController {
    private useCase: UpdateUserAvatarUseCase;

    constructor (useCase: UpdateUserAvatarUseCase) {
      this.useCase = useCase
    }

    async handle (req:Request<any, any, any, any, Record<string, any>>, res: Response) {
      const { file, user } = req
      if (!user) throw new AppError('User is undefined', 400)
      if (!file) throw new AppError('File is undefined', 400)
      return await this.useCase.execute(file as Express.Multer.File, user)
    }
}
