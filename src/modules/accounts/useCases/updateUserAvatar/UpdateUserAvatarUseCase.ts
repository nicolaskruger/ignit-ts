import { Express } from 'express'
import { deleteFile } from '../../../../utils/file'
import { User } from '../../entities/User'
import { UserRepository } from '../../repositories/implementations/UserRepository'
import { resolve } from 'path'

export class UpdateUserAvatarUseCase {
    private repository: UserRepository

    constructor (repository:UserRepository) {
      this.repository = repository
    }

    async execute (file: Express.Multer.File, user: User) {
      if (user.avatar) {
        const back = '_'.repeat(5).split('').map(v => '..')
        await deleteFile(resolve(__dirname, ...back, 'tmp', 'avatar', user.avatar))
      }
      await this.repository.changeAvatar(user.id, file.filename)
      return {
        msg: 'Alter with sucess'
      }
    }
}
