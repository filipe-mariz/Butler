  
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import ImageUser from './02_ImageModel';
import MakeBank from './03_MakeBanckUser';

@Entity('User') 
export default class User {
    @PrimaryGeneratedColumn('increment') id: number
    @Column() firstName: string
    @Column() secondName: string
    @Column() born: string
    @Column() sex: string
    @Column() email: string
    @Column() number: string
    @Column() uf: string
    @Column() city: string
    @Column() userName: string
    @Column() password: string
    @Column() butlerCode: number

    @OneToMany(() => ImageUser, image => image.user, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: 'user_id'})
    image: ImageUser[];

    @OneToOne(() => MakeBank) 
    @JoinColumn({name: 'butlerCode'}) 
    makeBank: MakeBank
}