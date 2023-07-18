/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';


import { adminModule } from './Admin/admin.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userModule } from './User/user.module';
import { organizerModule } from './Organizer/organizer.module';


@Module({
  imports: [adminModule,userModule,organizerModule,TypeOrmModule.forRoot(
   {
    type:"postgres",
    host:"localhost",
    port:5432,
    username:"postgres",
    password:"anik",
    database:"3NP_Project",
    autoLoadEntities:true,
    synchronize:true,

   } 
  )],
  controllers: [],
  providers: [],
})
export class AppModule {}
