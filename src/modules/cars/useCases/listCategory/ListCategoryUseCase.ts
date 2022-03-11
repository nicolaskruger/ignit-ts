import { Category } from '../../model/Category'
import { CategoriesRepository } from '../../repositories/CategoryRepositories'

export class ListCategoryUseCase {
    private categoryRepository:CategoriesRepository;

    constructor (categoryRepository:CategoriesRepository) {
      this.categoryRepository = categoryRepository
    }

    execute ():Category[] {
      return this.categoryRepository.list()
    }
}
