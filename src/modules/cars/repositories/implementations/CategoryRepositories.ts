import { DataSource, Repository } from 'typeorm'
import { v4 } from 'uuid'
import { dataSource } from '../../../../database'
import { Category } from '../../entities/Category'
import { ICategoryRepository } from '../ICategoryRepository'
import { inject, singleton } from 'tsyringe'

interface ICreateCategoryDTO {
    name: string,
    description: string
}

@singleton()
export class CategoriesRepository implements ICategoryRepository {
    private static INSTANCE:CategoriesRepository;

    private repository: Repository<Category>;

    public static getInstance ():CategoriesRepository {
      if (!this.INSTANCE) {
        this.INSTANCE = new CategoriesRepository(dataSource)
      }
      return this.INSTANCE
    }

    constructor (@inject(DataSource) dataSource: DataSource) {
      this.repository = dataSource.getRepository(Category)
    }

    async create ({ name, description }: ICreateCategoryDTO) {
      const category = this.repository.create(
        {
          id: v4(),
          name,
          description,
          createdAt: new Date()
        }
      )

      await this.repository.save(category)
    }

    async existsByName (name: string): Promise<boolean> {
      const category = await this.repository.findOneBy({ name })
      return category !== null
    }

    async list (): Promise<Category[]> {
      return await this.repository.find()
    }
}
