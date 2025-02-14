import { MigrationInterface, QueryRunner } from 'typeorm';

export class NuEndNullable1738890464093 implements MigrationInterface {
  name = 'NuEndNullable1738890464093';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "school" ALTER COLUMN "nu_endereco" DROP NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "school" ALTER COLUMN "nu_endereco" SET NOT NULL`);
  }
}
