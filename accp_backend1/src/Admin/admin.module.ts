/* eslint-disable prettier/prettier */

import { Module } from "@nestjs/common";
import { AdminController } from "./admin.controller";
import { AdminService } from "./admin.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminEntity, UserEntity } from "./admin.entity";


@Module({
    imports: [TypeOrmModule.forFeature([ AdminEntity,UserEntity])],
    controllers: [AdminController],
    providers: [AdminService]
})
export class adminModule {
}