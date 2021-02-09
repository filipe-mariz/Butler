import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import  User  from './01_UserModel';

@Entity('MakeBankUser') 
export default class MakeBank {
    @PrimaryGeneratedColumn('increment') id: number
    //@Column() butlerCode: number
    @OneToOne(() => User)
    @JoinColumn({name: 'butlerCode'})
    user: User;

    @Column() rg: number
    @Column() cpf: number
    @Column() nationality: string
    @Column() path_RG: string
    @Column() path_CPF: string
    @Column() path_Selfie: string
}