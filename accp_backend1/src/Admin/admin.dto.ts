/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString, Matches } from "class-validator";


/* eslint-disable prettier/prettier */
export class adminDTO{
 
  id:number
 @IsString()
 @Matches( /^[a-zA-Z]+$/, {message:"Please enter a proper name"})
 @IsNotEmpty()
  name: string;
  @IsEmail()
  email:string;
  @IsNotEmpty()
  password:string;
  @IsNotEmpty()
  phone:string;
  filenames: string;
 
}

export class adminProfileDTO{
id:number;
fname:string;
  
@IsNotEmpty()
Dob: string;

@IsString()
@IsNotEmpty()
Phone: string; 


@IsString() 
Status: string;

@IsString()
About: string;

}

export class AdminLoginDTO {
  @IsEmail({}, { message: "invalid email" })
 email: string;
 password: string;
}