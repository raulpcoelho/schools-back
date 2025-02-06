import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTables1738871164447 implements MigrationInterface {
  name = 'CreateTables1738871164447';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "school" ("co_entidade" character varying(256) NOT NULL, "no_entidade" character varying(256) NOT NULL, "no_municipio" character varying(256) NOT NULL, "sg_uf" character varying(256) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6592bb694af7567ccb4a197ca3a" PRIMARY KEY ("co_entidade"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "school"`);
  }
}
