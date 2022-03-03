import { ICategoryRepository } from '../../repositories/ICategoryRepository'

type IRequest = {
  name: string,
  description: string
}

class CreateCategoryUseCase {
  private categoriesRepository: ICategoryRepository;

  constructor (categoriesRepository: ICategoryRepository) {
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

export { CreateCategoryUseCase }
