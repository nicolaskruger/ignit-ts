import { ILoginDTO } from '../../dtos/ILoginDTO'
import { IUserReposisoty } from '../../repositories/IUserRepository'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export class AuthenticateUserUseCase {
    private repository: IUserReposisoty;

    constructor (respository: IUserReposisoty) {
      this.repository = respository
    }

    async execute (login:ILoginDTO) {
      const user = await this.repository.findByEmail(login.email)
      if (!user) { throw new Error('this user not exists') }
      const aprove = bcrypt.compare(login.password, user?.password as string)
      if (!aprove) {
        throw new Error('this password is invalid')
      }
      const token = jwt.sign({ email: user.email }, 'shhh')

      return {
        token: token
      }
    }
}
