import { Category } from '../entities/Category'

export interface ICreateCategoryDTO {
    name: string,
    description: string
}
export interface ICategoryRepository {
    create({ name, description }: ICreateCategoryDTO):Promise<void>,
    existsByName(name: string):Promise<boolean>,
    list():Promise<Category[]>
}
