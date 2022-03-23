import { container } from 'tsyringe'
import { DataSource } from 'typeorm'
import { dataSource } from '../../database'

const containerConfig = () => {
  container.register<DataSource>(
    DataSource,
    { useValue: dataSource }
  )
}

export { containerConfig }
