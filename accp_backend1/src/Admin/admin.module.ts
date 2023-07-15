/* eslint-disable prettier/prettier */

import { Module } from "@nestjs/common";
import { AdminController } from "./admin.controller";
import { AdminService } from "./admin.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminEntity,  UserEntity } from "./admin.entity";
import { AdminProfile } from "./adminprofile.entity";
import { userProfile } from "src/User/userprofile.entity";



@Module({
    imports: [TypeOrmModule.forFeature([ AdminEntity,UserEntity,AdminProfile,userProfile])],
    controllers: [AdminController],
    providers: [AdminService]
})
export class adminModule {
}