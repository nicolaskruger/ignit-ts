import { Category } from '../../entities/Category'
import { ICategoryRepository } from '../../repositories/ICategoryRepository'

export class ListCategoryUseCase {
    private categoryRepository:ICategoryRepository;

    constructor (categoryRepository: ICategoryRepository) {
      this.categoryRepository = categoryRepository
    }

    execute ():Promise<Category[]> {
      return this.categoryRepository.list()
    }
}
