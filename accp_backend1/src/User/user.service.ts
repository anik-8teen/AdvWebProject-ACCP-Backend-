/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userrepo: Repository<UserEntity>,
  ) {}

  async adduser(data): Promise<UserEntity> {
    return this.userrepo.save(data);
  }
}
