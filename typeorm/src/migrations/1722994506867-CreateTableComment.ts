import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTableComment1722994506867 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'comment',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment', 
                },
                {
                    name: 'description',
                    type: 'varchar',
                },
                {
                    name: 'post_id',
                    type: 'integer',
                    isNullable: false,
                },
            ]
        }));

        await queryRunner.createForeignKey('comment', new TableForeignKey({
            name: 'fk_comment_post',
            columnNames: ['post_id'],
            referencedTableName: 'post',
            referencedColumnNames: ['id'],
        }));
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('comment');
    }

}
