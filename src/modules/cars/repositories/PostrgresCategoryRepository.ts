import { Category } from '../model/Category'
import { ICategoryRepository, ICreateCategoryDTO } from './ICategoryRepository'

export class PostrgresCategoryRepository implements ICategoryRepository {
  create ({ name, description }: ICreateCategoryDTO): void {
    throw new Error('Method not implemented.')
  }

  existsByName (name: string): boolean {
    throw new Error('Method not implemented.')
  }

  list (): Category[] {
    throw new Error('Method not implemented.')
  }
}
