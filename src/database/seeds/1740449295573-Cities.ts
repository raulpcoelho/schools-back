import { MigrationInterface, QueryRunner } from 'typeorm';

export class Cities1740449295573 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO public.city (id, name) VALUES (1, 'Recife');`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM public.city WHERE id = 1;`);
  }
}
