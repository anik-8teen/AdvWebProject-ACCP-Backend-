/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { AdminEntity, } from "./admin.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AdminLoginDTO, adminDTO, adminProfileDTO } from "./admin.dto";
import * as bcrypt from 'bcrypt';
import { EventEntity } from "src/Organizer/event.entity ";
import { UserEntity } from "src/User/user.entity";
import { AdminProfile } from "./adminprofile.entity";


@Injectable()
export class AdminService{
  
  
 
  
  constructor(
    @InjectRepository(AdminEntity)
    private adminrepo:Repository<AdminEntity>,
    @InjectRepository(UserEntity)
    private userrepo:Repository<UserEntity>,
    @InjectRepository(AdminProfile)
    private profilerepo:Repository<AdminProfile>,
    @InjectRepository(EventEntity)
    private eventrepo:Repository<EventEntity>
    )
    {}
    
  
 
  
  async getAllAdmin(): Promise<AdminEntity[]> {
    //onsole.log(data.name[]);
    return this.adminrepo.find();
  }
    
  
  async getAdminById(id: number): Promise<AdminEntity> {
      
    return this.adminrepo.findOneBy({ id });
}  

  async addAdmin(email:string,data: adminDTO): Promise<AdminEntity> {
    const salt = await bcrypt.genSalt();
        data.password = await bcrypt.hash(data.password,salt);
    return this.adminrepo.save(data);
  }
   
    
  async updateAdmin(email:string,data: adminDTO): Promise<AdminEntity> {
    const salt = await bcrypt.genSalt();
        data.password = await bcrypt.hash(data.password,salt);
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

  //adminProfile
  
  async getAdminProfile(id: number): Promise<AdminProfile> {
    const admin = await this.adminrepo.findOne(id ,{ 
      relations: ['adminProfile']
    
    });
    if (admin && admin.adminProfile) {
      return admin.adminProfile;
    }
    return null;
  }
  


  async ShowAdminProfile(adminId: number): Promise<AdminProfile> {
    return this.profilerepo.findOne({ where: { Pid: adminId } });
  }

 async addProfile(data: adminProfileDTO): Promise<AdminProfile> {
    return this.profilerepo.save(data);
  }    
  
  async updateprofile(email: string, data: adminProfileDTO): Promise<AdminProfile> {
    
    await this.profilerepo.update(data.id, data);
    return this.profilerepo.findOneBy({ Pid: data.id });
   
    
  }
    
      async signup(data: adminDTO): Promise<AdminEntity> {
        const salt = await bcrypt.genSalt();
        data.password = await bcrypt.hash(data.password,salt);
       return this.adminrepo.save(data);
    }
      async signIn(data:  AdminLoginDTO  ) {
       const userdata= await this.adminrepo.findOneBy({email:data.email});
      //const match:boolean = await bcrypt.compare(data.password, userdata.password);
      const match: boolean = userdata && await bcrypt.compare(data.password, userdata.password);
      return match;
     }    

  



     async getAlluser(): Promise<UserEntity[]> {
      //onsole.log(data.name[]);
      return this.userrepo.find();
    } 
    
    getAllEvents(): Promise<EventEntity[]> {
      return this.eventrepo.find();
  
    }
    
     
    }
