import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'

// type AtLeast< T, K extends keyof T > = Partial<T> & Pick < T, K >

interface ICategory {
    id: string;
    name: string;
    description: string;
    createdAt: string;
}

@Entity('categories')
export class Category {
    @PrimaryColumn()
    id: string = '';

    @Column()
    name: string = '';

    @Column()
    description: string = '';

    @CreateDateColumn({
      name: 'created_at'
    })
    createdAt: Date = new Date();
}

export type CategoriesRequest = Pick<ICategory, 'name' | 'description'>;
