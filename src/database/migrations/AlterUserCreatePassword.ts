import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class AlterUserCreatePassword1648839618756 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    queryRunner.addColumn('users', new TableColumn({
      name: 'password',
      type: 'varchar'
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropColumn('users', 'password')
  }
}
