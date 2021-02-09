import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class UserImage1612464593424 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'UserImage',
            columns: [
                {
                    name: 'id', 
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true, 
                    generationStrategy: 'increment'
                },
                {
                    name: 'path',
                    type: 'varchar'
                },
                {
                    name: 'user_id', 
                    type: 'integer',
                }
            ],

            foreignKeys: [
                {
                    name: 'imageUser',
                    columnNames: ['user_id'],
                    referencedTableName: 'User',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('UserImage')
    }
}
