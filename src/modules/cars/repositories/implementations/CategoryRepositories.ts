import { Repository } from 'typeorm'
import { dataSource } from '../../../../database'
import { Category } from '../../entities/Category'
import { ICategoryRepository } from '../ICategoryRepository'

interface ICreateCategoryDTO {
    name: string,
    description: string
}

export class CategoriesRepository implements ICategoryRepository {
    private static INSTANCE:CategoriesRepository;

    private repository: Repository<Category>;

    public static getInstance ():CategoriesRepository {
      if (!this.INSTANCE) {
        this.INSTANCE = new CategoriesRepository()
      }
      return this.INSTANCE
    }

    private constructor () {
      this.repository = dataSource.getRepository(Category)
    }

    async create ({ name, description }: ICreateCategoryDTO) {
      const category = this.repository.create(
        new Category({
          name,
          description,
          createdAt: new Date().toDateString()
        })
      )
      await this.repository.save(category)
    }

    async existsByName (name: string): Promise<boolean> {
      const category = await this.repository.findOneBy({ name })
      return category !== null
    }

    async list (): Promise<Category[]> {
      return this.repository.find()
    }
}
