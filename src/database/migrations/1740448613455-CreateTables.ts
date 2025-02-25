import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTables1740448613455 implements MigrationInterface {
  name = 'CreateTables1740448613455';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "city" ("id" SERIAL NOT NULL, "name" character varying(256) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b222f51ce26f7e5ca86944a6739" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "region" ("id" SERIAL NOT NULL, "name" character varying(256) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5f48ffc3af96bc486f5f3f3a6da" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "school_type" ("id" SERIAL NOT NULL, "name" character varying(256) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c8a78eeac92045e39ce56d65641" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "school_state" ("id" SERIAL NOT NULL, "name" character varying(256) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_76eac7ccb10292ea59305dfcc48" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "school" ("id" character varying(50) NOT NULL, "name" character varying(256) NOT NULL, "address" character varying(256) NOT NULL, "address_number" integer, "district" character varying(256) NOT NULL, "ddd" integer, "phone" character varying(20), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "city_id" integer, "school_state_id" integer, "school_type_id" integer, "region_id" integer, CONSTRAINT "PK_57836c3fe2f2c7734b20911755e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "school" ADD CONSTRAINT "FK_7d71ba378421b5d78040ddedc1d" FOREIGN KEY ("city_id") REFERENCES "city"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "school" ADD CONSTRAINT "FK_8066358d1e8e34588b89ce14228" FOREIGN KEY ("school_state_id") REFERENCES "school_state"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "school" ADD CONSTRAINT "FK_4e0f8413e596fac3bb94797eb2e" FOREIGN KEY ("school_type_id") REFERENCES "school_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "school" ADD CONSTRAINT "FK_4fac13785b4a4447b28b3a68cae" FOREIGN KEY ("region_id") REFERENCES "region"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "school" DROP CONSTRAINT "FK_4fac13785b4a4447b28b3a68cae"`);
    await queryRunner.query(`ALTER TABLE "school" DROP CONSTRAINT "FK_4e0f8413e596fac3bb94797eb2e"`);
    await queryRunner.query(`ALTER TABLE "school" DROP CONSTRAINT "FK_8066358d1e8e34588b89ce14228"`);
    await queryRunner.query(`ALTER TABLE "school" DROP CONSTRAINT "FK_7d71ba378421b5d78040ddedc1d"`);
    await queryRunner.query(`DROP TABLE "school"`);
    await queryRunner.query(`DROP TABLE "school_state"`);
    await queryRunner.query(`DROP TABLE "school_type"`);
    await queryRunner.query(`DROP TABLE "region"`);
    await queryRunner.query(`DROP TABLE "city"`);
  }
}
