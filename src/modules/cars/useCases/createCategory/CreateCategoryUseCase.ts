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

  async execute ({ name, description }: IRequest): Promise<IRequest> {
    const exists = await this.categoriesRepository.existsByName(name)

    if (exists) {
      throw new Error('Category already exists !!!')
    }

    await this.categoriesRepository.create({
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
