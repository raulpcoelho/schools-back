import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchoolTypes1740449143290 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO public.school_type (id, name) VALUES
            (1, 'Pública'),
            (2, 'Privada');
        `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM public.school_type WHERE id = 1;`);
    await queryRunner.query(`DELETE FROM public.school_type WHERE id = 2;`);
  }
}
