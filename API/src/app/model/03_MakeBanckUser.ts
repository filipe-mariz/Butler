import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import User from './01_UserModel';
import MBImages from './04_MakeBankImages';

@Entity('MakeBankUser') 
export default class MakeBank {
    @PrimaryGeneratedColumn('increment') 
    id: number

    @Column({ type: 'int',  width: 8 }) 
    rg: number

    @Column({ type: 'int',  width: 11 }) 
    cpf: number

    @Column('varchar', { length: 15 }) 
    nationality: string

    @OneToOne(() => User)
    @JoinColumn({name: 'user_id'})
    user: User;

    @OneToOne(() => MBImages)
    @JoinColumn({name: 'mb_id'})
    mbImages: MBImages;
}
