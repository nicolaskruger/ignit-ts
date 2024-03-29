import { ICreateUserDTO } from '../dtos/ICreateUserDTO'
import { User } from '../entities/User'

export interface IUserReposisoty {
    create(data: ICreateUserDTO): Promise<void>;
    changeAvatar(id: string, avatar: string): Promise<void>;
    findByEmail(email: string): Promise<User | null>;
    findById(email: string): Promise<User | null>;
}
