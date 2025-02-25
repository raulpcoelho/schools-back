import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchoolStates1740449062768 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO public.school_state (id, name) VALUES (1, 'PE');`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM public.school_state WHERE id = 1;`);
  }
}
