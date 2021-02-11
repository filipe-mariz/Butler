import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class user1612462512436 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'User',
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
                    name: 'firstName',
                    type: 'varchar',
                    isNullable: false
                },

                {
                    name: 'secondName',
                    type: 'varchar',
                    isNullable: false
                },

                {
                    name: 'born',
                    type: 'varchar',
                    isNullable: false
                },

                {
                    name: 'sex',
                    type: 'varchar'
                },

                {
                    name: 'email',
                    type: 'varchar',
                    isNullable: false,
                    isUnique: true
                },

                {
                    name: 'number',
                    type: 'varchar',
                    isNullable: false,
                    isUnique: true
                },

                {
                    name: 'uf',
                    type: 'varchar',
                    isNullable: false
                },

                {
                    name: 'city',
                    type: 'varchar',
                    isNullable: false
                },

                {
                    name: 'userName',
                    type: 'varchar',
                    isNullable: false,
                    isUnique: true
                },

                {
                    name: 'password',
                    type: 'varchar',
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('User')
    }
}
