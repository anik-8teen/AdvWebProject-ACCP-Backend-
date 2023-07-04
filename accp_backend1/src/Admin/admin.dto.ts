/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString, Matches } from "class-validator";


/* eslint-disable prettier/prettier */
export class adminDTO{
 @IsNotEmpty()
  id:number
 @IsString()
 @Matches( /^[a-zA-Z]+$/, {message:"Please enter a proper name"})
 @IsNotEmpty()
  name: string;
  @IsEmail()
  email:string;
  @IsNotEmpty()
  password:string;
 
}