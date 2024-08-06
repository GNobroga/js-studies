import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1722973403514 implements MigrationInterface {
    name = 'Initial1722973403514'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "person" ("id" integer PRIMARY KEY AUTOINCREMENT, "email" varchar, "password" varchar, "type" varchar NOT NULL, "nameName" varchar, "nameFamilyname" varchar, "addressStreet" varchar, "addressNeighborhood" varchar, "addressNumber" integer)`);
        await queryRunner.query(`CREATE VIEW "user_view" AS SELECT "user"."email" AS "email", "user"."nameName" AS "name" FROM "person" "user" WHERE "user"."type" = 'USER'`);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("database", "schema", "table", "type", "name", "value") VALUES (NULL, NULL, NULL, ?, ?, ?)`, ["VIEW","user_view","SELECT \"user\".\"email\" AS \"email\", \"user\".\"nameName\" AS \"name\" FROM \"person\" \"user\" WHERE \"user\".\"type\" = 'USER'"]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = ? AND "name" = ?`, ["VIEW","user_view"]);
        await queryRunner.query(`DROP VIEW "user_view"`);
        await queryRunner.query(`DROP TABLE "person"`);
    }

}
