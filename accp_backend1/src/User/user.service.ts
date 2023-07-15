/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { userProfileDTO } from './user.dto';
import { userProfile } from './userprofile.entity';

@Injectable()
export class UserService {
 
  constructor(
    @InjectRepository(UserEntity)
    private userrepo: Repository<UserEntity>,
    @InjectRepository(userProfile)
    private userprofilerepo: Repository<userProfile>
  ) {}

  async adduser(data): Promise<UserEntity> {
    return this.userrepo.save(data);
  }
  async addProfile(data: userProfileDTO):Promise<userProfile> {  {
   return this.userprofilerepo.save(data);
  }
}
}
