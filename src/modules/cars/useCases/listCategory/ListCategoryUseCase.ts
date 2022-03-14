import { Category } from '../../model/Category'
import { ICategoryRepository } from '../../repositories/ICategoryRepository'

export class ListCategoryUseCase {
    private categoryRepository:ICategoryRepository;

    constructor (categoryRepository: ICategoryRepository) {
      this.categoryRepository = categoryRepository
    }

    execute ():Category[] {
      return this.categoryRepository.list()
    }
}