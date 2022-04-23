import { ILoginDTO } from '../../dtos/ILoginDTO'
import { IUserReposisoty } from '../../repositories/IUserRepository'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { AppError } from '../../../../errors/AppError'

export type IResponse = {
  user: {
    name: string,
    email: string
  },
  token: string
}

export class AuthenticateUserUseCase {
    private repository: IUserReposisoty;

    constructor (respository: IUserReposisoty) {
      this.repository = respository
    }

    async execute (login:ILoginDTO): Promise<IResponse> {
      const user = await this.repository.findByEmail(login.email)
      if (!user) { throw new AppError('this user not exists') }
      const aprove = bcrypt.compare(login.password, user?.password as string)
      if (!aprove) {
        throw new AppError('this password is invalid')
      }
      const token = jwt.sign({ email: user.email }, '332b7b56acd24bd63d1c0e750e28a80c', {
        subject: user.id,
        expiresIn: '1d'
      })

      return {
        user: {
          name: user.name,
          email: user.email
        },
        token: token
      }
    }
}
