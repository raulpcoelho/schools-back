import { MigrationInterface, QueryRunner } from 'typeorm';

export class Regions1740448808425 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO public.region (id, name) VALUES (1, 'Nordeste');`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM public.region WHERE id = 1;`);
  }
}
