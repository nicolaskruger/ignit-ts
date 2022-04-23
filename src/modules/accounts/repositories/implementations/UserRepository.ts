import { DataSource, Repository } from 'typeorm'
import { User } from '../../entities/User'
import { IUserReposisoty } from '../IUserRepository'
import { v4 } from 'uuid'
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { AppError } from '../../../../errors/AppError'

export class UserRepository implements IUserReposisoty {
    private repository:Repository<User>;

    constructor (dataSource: DataSource) {
      this.repository = dataSource.getRepository(User)
    }

    async changeAvatar (id:string, avatar: string): Promise<void> {
      const user = await this.repository.findOneBy({ id }) as User

      if (!user) throw new AppError('User not found')

      user.avatar = avatar

      await this.repository.save(user)
    }

    async findByEmail (email: string): Promise<User | null> {
      return await this.repository.findOneBy({ email })
    }

    async findById (id: string): Promise<User | null> {
      return await this.repository.findOneBy({ id })
    }

    async create (data: ICreateUserDTO): Promise<void> {
      const user = this.repository.create({
        id: v4(),
        createdAt: new Date(),
        isAdmin: false,
        ...data
      })
      await this.repository.save(user)
    }
}
