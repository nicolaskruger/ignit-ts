import { DataSource } from 'typeorm'

export const dataSource = new DataSource({
  type: 'postgres',
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
  host: 'localhost',
  port: 5432,
  migrations: ['./src/database/migrations/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations'
  }
})

dataSource.initialize()
