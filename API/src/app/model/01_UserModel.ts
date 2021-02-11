  
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import ImageUser from './02_ImageModel';
import MakeBank from './03_MakeBanckUser';

@Entity('User') 
export default class User {
    @PrimaryGeneratedColumn('increment') 
    id: number

    @Column('varchar', { length: 10}) 
    firstName: string

    @Column('varchar', { length: 10}) 
    secondName: string

    @Column('varchar', { length: 10}) 
    born: string

    @Column('varchar', { length: 10}) 
    sex: string

    @Column('varchar', { length: 50}) 
    email: string

    @Column('varchar', { length: 20}) 
    number: string

    @Column('varchar', { length: 20}) 
    uf: string

    @Column('varchar', { length: 20}) 
    city: string

    @Column('varchar', { length: 50}) 
    userName: string

    @Column('varchar', { length: 50}) 
    password: string

    @OneToMany(() => ImageUser, image => image.user, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: 'user_id'})
    image: ImageUser[];

    @OneToOne(() => MakeBank) 
    @JoinColumn({name: 'user_id'}) 
    makeBank: MakeBank
}