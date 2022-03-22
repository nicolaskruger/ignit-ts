import { v4 } from 'uuid'
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'

type AtLeast< T, K extends keyof T > = Partial<T> & Pick < T, K >

interface ICategory {
    id: string;
    name: string;
    description: string;
    createdAt: string;
}

@Entity('categories')
export class Category implements ICategory {
    @PrimaryColumn()
    @Column()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn({
      name: 'created_at'
    })
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
