import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import  User  from './01_UserModel';

@Entity('MakeBankUser') 
export default class MakeBank {
    @PrimaryGeneratedColumn('increment') 
    id: number

    @Column('int', { width: 10 })
    butlerCode: number

    @Column('varchar', { length: 8 }) 
    rg: number

    @Column('varchar', { length: 11 }) 
    cpf: number

    @Column('varchar', { length: 15 }) 
    nationality: string

    @Column('varchar', { length: 100 }) 
    path_RG: string

    @Column('varchar', { length: 100}) 
    path_CPF: string

    @Column('varchar', { length: 100}) 
    path_Selfie: string

    @OneToOne(() => User)
    @JoinColumn({name: 'butlerCode'})
    user: User;
}
