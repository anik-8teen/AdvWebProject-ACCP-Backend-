/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AdminEntity } from 'src/Admin/admin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity,AdminEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class userModule {}
