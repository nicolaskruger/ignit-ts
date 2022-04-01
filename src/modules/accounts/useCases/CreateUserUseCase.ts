import { ICreateUserDTO } from '../dtos/ICreateUserDTO'
import { User } from '../entities/User'
import { IUserReposisoty } from '../repositories/IUserRepository'

export class CreateUserUseCase {
    private repository: IUserReposisoty;

    constructor (repository: IUserReposisoty) {
      this.repository = repository
    }

    async execute (user:ICreateUserDTO) {
        type FindBy = {
            value: string,
            func: (value:string) => Promise<User | null>
        }

        const findBy: FindBy[] = [
          {
            value: user.email,
            func: this.repository.findByEmail
          },
          {
            value: user.userName,
            func: this.repository.findByUserName
          }
        ]

        await this.repository.create(user)
    }
}
