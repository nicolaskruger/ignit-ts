import { injectable } from 'tsyringe'
import { Category } from '../../entities/Category'
import { ICategoryRepository } from '../../repositories/ICategoryRepository'

@injectable()
export class ListCategoryUseCase {
    private categoryRepository:ICategoryRepository;

    constructor (categoryRepository: ICategoryRepository) {
      this.categoryRepository = categoryRepository
    }

    async execute ():Promise<Category[]> {
      return await this.categoryRepository.list()
    }
}
