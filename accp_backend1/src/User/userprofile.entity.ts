/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity('userProfile')
export class userProfile{
 
@PrimaryGeneratedColumn()
id: number;
@Column()
fName:string;
@Column()
Dob:string;
@Column()
UserType:string;
@Column()
Phone:string;
@Column()
Status:string;
@Column()
About:string;
@OneToOne(() =>UserEntity ,{cascade:true})
@JoinColumn()
user:UserEntity;

}