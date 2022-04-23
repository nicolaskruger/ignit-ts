import { Express } from 'express'
import { User } from '../../entities/User'
import { UserRepository } from '../../repositories/implementations/UserRepository'

export class UpdateUserAvatarUseCase {
    private repository: UserRepository

    constructor (repository:UserRepository) {
      this.repository = repository
    }

    async execute (file: Express.Multer.File, user: User) {
      await this.repository.changeAvatar(user.id, file.filename)
      return {
        msg: 'Alter with sucess'
      }
    }
}
