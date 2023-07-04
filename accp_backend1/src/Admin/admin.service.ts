/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { AdminEntity, } from "./admin.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Admin, Repository } from "typeorm";
import { UserEntity } from "./User/user.entity";


@Injectable()
export class AdminService{
  constructor(
    @InjectRepository(AdminEntity)
    private adminrepo:Repository<Admin>,
    @InjectRepository(UserEntity)
    private userrepo:Repository<UserEntity>)
    {}
    
  
 async register(data: Admin):Promise<Admin>  {

    console.log(data);
    return this.adminrepo.save(data);
  }
  
 async getAllAdmin(): Promise<Admin[]> {
    //console.log(data.name[]);
    return this.adminrepo.find();
  }
    
    

   async addAdmin(data:Admin): Promise<Admin> {
       // throw new Error('Method not implemented.');
       //console.log(data);
        return this.adminrepo.save(data);
         ;

    }
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   
   /*async getAdminbyId(_id:number):Promise<Admin>{
        // console.log(id);
        //debugger
     return this.adminrepo.findOneBy({id });

    }
*/
    
  async  updateAdmin(id:number,data:Admin): Promise<Admin> {
        //throw new Error('Method not implemented.');
        
       await this.adminrepo.update(id,data); 
       return this.adminrepo.findOne({id:id});
        // return this.adminrepo.update(id,data.id,data.name);
    }

async getAdminbyId(id: number): Promise<Admin> {
    return this.adminrepo.findOne({ id: id });
}

    /*updateAdminById(id: number, data: adminDTO): object {
     
      console.log(data.name+" "+data.id);
  
      return data;
    }
    */
      //DELETE ADMIN
      
     async deleteAdmin(id:number): Promise<void> {
       // throw new Error('Method not implemented.');
        await this.adminrepo.delete(id);
  
      
      
      };

    }
