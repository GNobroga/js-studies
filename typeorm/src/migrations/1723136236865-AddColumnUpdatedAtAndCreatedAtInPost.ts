import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnUpdatedAtAndCreatedAtInPost1723136236865 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('post', new TableColumn({
            name: 'created_at',
            type: 'date',
        }));

        await queryRunner.addColumn('post', new TableColumn({
            name: 'updated_at',
            type: 'date',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('post', 'created_at');
        await queryRunner.dropColumn('post', 'updated_at');
    }

}
