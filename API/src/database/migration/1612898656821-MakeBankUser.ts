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
                    name: 'butlerCode',
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
                    name: 'path_RG',
                    type: 'varchar',
                    isNullable: false
                },

                {
                    name: 'path_CPF',
                    type: 'varchar',
                    isNullable: false
                },

                {
                    name: 'path_Selfie',
                    type: 'varchar',
                    isNullable: false
                }
            ],

            foreignKeys: [
                {
                    name: 'user',
                    columnNames: ['butlerCode'],
                    referencedTableName: 'User',
                    referencedColumnNames: ['butlerCode'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('MakeBankUser')
    }

}
