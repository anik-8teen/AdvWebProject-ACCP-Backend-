/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';


import { adminModule } from './Admin/admin.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [adminModule,TypeOrmModule.forRoot(
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
