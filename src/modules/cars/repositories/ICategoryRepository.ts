import { Category } from '../entities/Category'

export interface ICreateCategoryDTO {
    name: string,
    description: string
}
export interface ICategoryRepository {
    create({ name, description }: ICreateCategoryDTO):void,
    existsByName(name: string):boolean,
    list():Category[]
}
