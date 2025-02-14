import { MigrationInterface, QueryRunner } from 'typeorm';

export class NullableDddPhone1739503338883 implements MigrationInterface {
  name = 'NullableDddPhone1739503338883';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "school" ALTER COLUMN "nu_ddd" DROP NOT NULL`);
    await queryRunner.query(`ALTER TABLE "school" ALTER COLUMN "nu_telefone" DROP NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "school" ALTER COLUMN "nu_telefone" SET NOT NULL`);
    await queryRunner.query(`ALTER TABLE "school" ALTER COLUMN "nu_ddd" SET NOT NULL`);
  }
}
