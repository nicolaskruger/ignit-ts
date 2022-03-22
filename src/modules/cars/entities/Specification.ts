import { v4 } from 'uuid'

type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>

interface ISpecification {
    id: string;
    name: string;
    description: string;
    createdAt: string;
}

class Specification implements ISpecification {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    constructor ({ id, name, description, createdAt }: AtLeast<ISpecification, 'name' | 'description' | 'createdAt'>) {
      this.id = id as string
      this.name = name
      this.description = description
      this.createdAt = createdAt
      if (!id) {
        this.id = v4()
      }
    }
}

export { Specification }
