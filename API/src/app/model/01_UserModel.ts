  
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import ImageUser from './02_ImageModel';

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

    @OneToMany(() => ImageUser, image => image.user, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: 'user_id'})
    image: ImageUser[];
}