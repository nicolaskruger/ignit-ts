import { DataSource } from 'typeorm'
import { Category } from '../modules/cars/entities/Category'

export const dataSource = new DataSource({
  type: 'postgres',
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
  host: 'localhost',
  port: 5432,
  synchronize: true,
  logging: true,
  migrations: ['./src/database/migrations/*.ts'],
  entities: [Category],
  cli: {
    migrationsDir: './src/database/migrations'
  }
})

dataSource.initialize()
  .then(() => {

  })
  .catch(error => {
    console.log(error)
  })
