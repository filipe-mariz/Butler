import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from './01_UserModel';

@Entity('UserImage') 
export default class ImageUser {
    @PrimaryGeneratedColumn('increment') 
    id: number

    @Column() 
    path: string;  

    @ManyToOne(() => User, user => user.image)
    @JoinColumn({name: 'user_id'})
    user: User;
}