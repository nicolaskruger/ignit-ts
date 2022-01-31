import { Category } from '../model/Category'

interface ICreateCategoryDTO {
    name: string,
    description: string
}

export class CategoriesRepository {
    private categories: Category[];
    constructor () {
      this.categories = []
    }

    create ({ name, description }: ICreateCategoryDTO) {
      this.categories.push(new Category({
        name,
        description,
        createdAt: new Date().toDateString()
      }))
    }

    existsByName (name: string): boolean {
      return this.categories.some(c => c.name === name)
    }

    list (): Category[] {
      return this.categories
    }
}
