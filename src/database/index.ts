import { DataSource } from 'typeorm'

export const dataSource = new DataSource({
  type: 'postgres',
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
  host: 'localhost',
  port: 5432
})

dataSource.initialize()
