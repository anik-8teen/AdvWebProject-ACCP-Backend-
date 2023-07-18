/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString} from'class-validator';



export class eventDTO{
    
    @IsNumber()
    @IsNotEmpty()
    id:number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    place: string;

    @IsNotEmpty()
    time: string;

    
}