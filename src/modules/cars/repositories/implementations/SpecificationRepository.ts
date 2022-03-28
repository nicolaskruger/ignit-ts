import { DataSource, Repository } from 'typeorm'
import { v4 } from 'uuid'
import { Specification } from '../../entities/Specification'
import { ICreateSpecificationDTO, ISpecificationRepository } from '../ISpecificationRepository'

export class SpecificationRepository implements ISpecificationRepository {
    private repository: Repository<Specification>;

    constructor (dataSource:DataSource) {
      this.repository = dataSource.getRepository(Specification)
    }

    async findByName (name: string): Promise<Specification> {
      const specification = await this.repository.findOne({ where: { name } })
      if (!specification) { throw new Error('specification dos not exist') }
      return specification
    }

    async create ({ name, description }: ICreateSpecificationDTO): Promise<void> {
      const specification = this.repository.create(
        {
          id: v4(),
          name,
          description,
          createdAt: new Date()
        })

      await this.repository.save(specification)
    }
}
