import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class MakeBankUser1612898656821 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'MakeBankUser',
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
                    name: 'user_id',
                    type: 'integer',
                    isNullable: false
                },

                {
                    name: 'rg',
                    type: 'integer',
                    isNullable: false
                },

                {
                    name: 'cpf',
                    type: 'integer',
                    isNullable: false
                },

                {
                    name: 'nationality',
                    type: 'varchar'
                },
                
                {
                    name: 'mb_id',
                    type: 'integer'
                }
                
            ],

            foreignKeys: [
                {
                    name: 'user',
                    columnNames: ['user_id'],
                    referencedTableName: 'User',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                },
               
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('MakeBankUser')
    }

}
