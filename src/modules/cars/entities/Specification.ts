import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'

// type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>

// interface ISpecification {
//     id: string;
//     name: string;
//     description: string;
//     createdAt: Date;
// }

@Entity('specifications')
class Specification {
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

export { Specification }
