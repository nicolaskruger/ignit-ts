import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class AlterUserCreateAvatar1650735062245 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    queryRunner.addColumn('users', new TableColumn({
      name: 'avatar',
      type: 'varchar',
      isNullable: true
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropColumn('users', 'avatar')
  }
}
