import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddSchoolColumns1738882129582 implements MigrationInterface {
  name = 'AddSchoolColumns1738882129582';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "school" ADD "rede" character varying(256) NOT NULL`);
    await queryRunner.query(`ALTER TABLE "school" ADD "ds_endereco" character varying(256) NOT NULL`);
    await queryRunner.query(`ALTER TABLE "school" ADD "nu_endereco" integer NOT NULL`);
    await queryRunner.query(`ALTER TABLE "school" ADD "no_bairro" character varying(256) NOT NULL`);
    await queryRunner.query(`ALTER TABLE "school" ADD "no_regiao" character varying(20) NOT NULL`);
    await queryRunner.query(`ALTER TABLE "school" ADD "nu_ddd" integer NOT NULL`);
    await queryRunner.query(`ALTER TABLE "school" ADD "nu_telefone" character varying(20) NOT NULL`);
    await queryRunner.query(`ALTER TABLE "school" DROP CONSTRAINT "PK_6592bb694af7567ccb4a197ca3a"`);
    await queryRunner.query(`ALTER TABLE "school" DROP COLUMN "co_entidade"`);
    await queryRunner.query(`ALTER TABLE "school" ADD "co_entidade" character varying(50) NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "school" ADD CONSTRAINT "PK_6592bb694af7567ccb4a197ca3a" PRIMARY KEY ("co_entidade")`,
    );
    await queryRunner.query(`ALTER TABLE "school" DROP COLUMN "sg_uf"`);
    await queryRunner.query(`ALTER TABLE "school" ADD "sg_uf" character varying(5) NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "school" DROP COLUMN "sg_uf"`);
    await queryRunner.query(`ALTER TABLE "school" ADD "sg_uf" character varying(256) NOT NULL`);
    await queryRunner.query(`ALTER TABLE "school" DROP CONSTRAINT "PK_6592bb694af7567ccb4a197ca3a"`);
    await queryRunner.query(`ALTER TABLE "school" DROP COLUMN "co_entidade"`);
    await queryRunner.query(`ALTER TABLE "school" ADD "co_entidade" character varying(256) NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "school" ADD CONSTRAINT "PK_6592bb694af7567ccb4a197ca3a" PRIMARY KEY ("co_entidade")`,
    );
    await queryRunner.query(`ALTER TABLE "school" DROP COLUMN "nu_telefone"`);
    await queryRunner.query(`ALTER TABLE "school" DROP COLUMN "nu_ddd"`);
    await queryRunner.query(`ALTER TABLE "school" DROP COLUMN "no_regiao"`);
    await queryRunner.query(`ALTER TABLE "school" DROP COLUMN "no_bairro"`);
    await queryRunner.query(`ALTER TABLE "school" DROP COLUMN "nu_endereco"`);
    await queryRunner.query(`ALTER TABLE "school" DROP COLUMN "ds_endereco"`);
    await queryRunner.query(`ALTER TABLE "school" DROP COLUMN "rede"`);
  }
}
