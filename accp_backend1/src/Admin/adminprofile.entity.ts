/* eslint-disable prettier/prettier */
import { IsDate, IsNotEmpty, IsString } from "class-validator";
import { Column, Entity,  JoinColumn,  OneToOne,  PrimaryGeneratedColumn } from "typeorm";
import { AdminEntity } from "./admin.entity";


@Entity('adminProfile')
export class AdminProfile {
  @PrimaryGeneratedColumn()

  Pid: number;
  @Column()
  @IsString()
  @IsNotEmpty()
  fName: string;

  @Column()
  @IsDate()
  @IsNotEmpty()
  Dob:string;

  
  @Column()
  @IsString()
  @IsNotEmpty()
  Phone: string;

  @Column()
  @IsString()
  Status: string;

  @Column()
  @IsString()
  About: string;

  @OneToOne(() =>AdminEntity,{
    cascade:true,
    
})
@JoinColumn()
admin:AdminEntity;
  
}
/*

adminProfile
{
    "fName": "AndreGomes",
    "Dob": "28-1-1998",
    "Phone": "123446543",
    "Status": "nothing",
    "About": "helloo"
}

user
{
  "name" :"anik",
  "email" :"a@gmail.com",
  "password" :"1224",
  "admin" :"1"

}

*/