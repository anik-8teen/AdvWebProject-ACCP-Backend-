/* eslint-disable prettier/prettier */
import { UserEntity } from "src/User/user.entity";
import { Column, Entity,  OneToMany,     PrimaryGeneratedColumn } from "typeorm";
import { AdminProfile } from "./adminprofile.entity";

@Entity("admin")
export class AdminEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    password: string;
    
    @OneToMany(()=>UserEntity,user=>user.admin)
    users: UserEntity[];
    
    
}
export { UserEntity };
export{AdminProfile};


