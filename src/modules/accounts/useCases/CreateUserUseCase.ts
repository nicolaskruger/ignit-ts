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
            func: (value:string) => Promise<User | null>,
            message: string
        }

        const findBy: FindBy[] = [
          {
            value: user.email,
            func: (value) => this.repository.findByEmail(value),
            message: 'jah existe usuario com esse email'
          },
          {
            value: user.userName,
            func: (value) => this.repository.findByUserName(value),
            message: 'jah existe usuario con ess user name'
          }
        ]

        await Promise.all(
          findBy.map(async ({ func, message, value }) => {
            if (await func(value)) {
              throw new Error(message)
            }
          })
        )

        await this.repository.create(user)
    }
}
