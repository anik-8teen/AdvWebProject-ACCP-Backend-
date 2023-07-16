/* eslint-disable prettier/prettier */
import { Body, Controller,  Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { userDTO, userProfileDTO } from './user.dto';
import { SessionGuard } from 'src/Admin/session.guard';

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

@Post('adduser')
  addUser(@Body()data:userDTO):object {
return this.userService.adduser(data);
}

@UseGuards(SessionGuard) 
@Post('addprofile')

addProfile(@Body() data:userProfileDTO): object {

return this.userService.addProfile(data);
}


}

