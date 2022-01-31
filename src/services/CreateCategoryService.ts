import { CategoriesRepository } from '../repositories/CategoryRepositories'

type IRequest = {
    name: string,
    description: string
}

class CreateCategoryService {
    private categoriesRepository:CategoriesRepository;

    constructor (categoriesRepository: CategoriesRepository) {
      this.categoriesRepository = categoriesRepository
    }

    execute ({ name, description }: IRequest): IRequest {
      if (this.categoriesRepository.existsByName(name)) {
        throw new Error('Category already exists !!!')
      }

      this.categoriesRepository.create({
        name,
        description
      })
      return {
        name,
        description
      }
    }
}

export { CreateCategoryService }
