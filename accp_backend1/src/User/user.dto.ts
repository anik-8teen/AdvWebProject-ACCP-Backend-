/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';


/* eslint-disable prettier/prettier */
export class userDTO{
 @IsString()
 @Matches( /^[a-zA-Z]+$/, {message:"Please enter a proper name"})
 @IsNotEmpty()
  name: string;
  @IsEmail()
  email:string;
  @IsNotEmpty()
  password:string;
  admin:string;

}
/*
{
  "name": "John",
  "email": "john@example.com",
  "password": "password"
}
*/

export class userProfileDTO{
@IsString()
@IsNotEmpty()
@Matches( /^[a-zA-Z]+$/, {message:"Please enter a proper name"})
fName:string;
@IsString()
@IsNotEmpty()
Dob:string;
@IsString()
@IsNotEmpty()
UserType:string;
@IsString()
@IsNotEmpty()
Phone:string;
Status:string;
About:string;


}
/*
{
  "fName":"John",
  "Dob":"20-7-1999",
  "UserType":"student",
  "Phone":"123",
  "Status":"sd",
  "About":"adkamca"
}
*/