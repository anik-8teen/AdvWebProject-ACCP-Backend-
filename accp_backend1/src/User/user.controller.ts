/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { userDTO } from './user.dto';

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

@Post('adduser')
  addUser(@Body()data:userDTO):object {
return this.userService.adduser(data);
}


}
