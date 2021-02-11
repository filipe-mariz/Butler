import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class MakeBankImages1613056855779 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'MBImages',
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
                    name: 'path_RG',
                    type: 'varchar',                    
                },

                {
                    name: 'path_CPF',
                    type: 'varchar',                    
                },

                {
                    name: 'path_Selfie',
                    type: 'varchar',                    
                },

                {
                    name: 'mb_id',
                    type: 'integer'
                }
            ],

            foreignKeys: [
                {
                    name: 'makeBank',
                    columnNames: ['mb_id'],
                    referencedTableName: 'MakeBankUser',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('MBImages')
    }

}
