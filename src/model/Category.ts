import { v4 } from 'uuid'

type AtLeast< T, K extends keyof T > = Partial<T> & Pick < T, K >

interface ICategory {
    id: string;
    name: string;
    description: string;
    createdAt: string;
}

export class Category implements ICategory {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    constructor ({ id, name, description, createdAt }:AtLeast<ICategory, 'name'|'description'|'createdAt'>) {
      this.id = id as string
      this.name = name
      this.description = description
      this.createdAt = createdAt
      if (!id) {
        this.id = v4()
      }
    }
}

export type CategoriesRequest = Pick<ICategory, 'name' | 'description'>;
