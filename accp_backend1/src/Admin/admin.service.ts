/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { AdminEntity, UserEntity, } from "./admin.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { adminDTO } from "./admin.dto";



@Injectable()
export class AdminService{
  constructor(
    @InjectRepository(AdminEntity)
    private adminrepo:Repository<AdminEntity>,
    @InjectRepository(UserEntity)
    private userrepo:Repository<UserEntity>)
    {}
    
  
 
  
  async getAllAdmin(): Promise<AdminEntity[]> {
    //onsole.log(data.name[]);
    return this.adminrepo.find();
  }
    
  
  async getAdminById(id: number): Promise<AdminEntity> {
      
    return this.adminrepo.findOneBy({ id });
}  

  async addAdmin(data: adminDTO): Promise<AdminEntity> {
    return this.adminrepo.save(data);
  }
   
    
  async updateAdmin(data: adminDTO): Promise<AdminEntity> {
    await this.adminrepo.update(data.id, data);
    return this.adminrepo.findOneBy({ id: data.id });
}

  async updateadminby(id:number, data:adminDTO):Promise<AdminEntity> {

    await  this.adminrepo.update(id, data);
    return this.adminrepo.findOneBy({ id});
  }
   
      //DELETE ADMIN
      
  async deleteAdmin(id:number): Promise<void> {
       // throw new Error('Method not implemented.');
        await this.adminrepo.delete(id);
  
      
      
      }
  
  async adduser(data):Promise<UserEntity> {
    return this.userrepo.save(data);

  }   

    }
