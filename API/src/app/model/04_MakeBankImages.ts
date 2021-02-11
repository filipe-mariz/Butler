import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import MakeBank from './03_MakeBanckUser'

@Entity('MBImages')
export default class MBImages {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column() 
    path_RG: string

    @Column() 
    path_CPF: string

    @Column() 
    path_Selfie: string

    @OneToOne(() => MakeBank)
    @JoinColumn({name: 'mb_id'})
    makeBank: MakeBank
}