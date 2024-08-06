import { MigrationInterface, QueryRunner } from "typeorm";

export class Populate1722973435278 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO person (email, type, nameName) VALUES ('thallesju@gmail.com', 'USER', 'Thalles');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM person WHERE email = 'thallesju@gmail.com';`);
    }

}
