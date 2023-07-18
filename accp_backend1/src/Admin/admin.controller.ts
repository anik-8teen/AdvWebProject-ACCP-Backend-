/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put,  Res, Session, UnauthorizedException, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';

import { adminDTO, adminProfileDTO } from './admin.dto';
 
import { AdminService } from './admin.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterError, diskStorage } from 'multer';
import { SessionGuard } from './session.guard';





@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
 
 //GET ADDMIN by 
 //Feature=1

  @Get('index/:id')
  @UsePipes(new ValidationPipe())
  @UseGuards(SessionGuard)
  getAdminbyId( @Param('id')id:number): object {
    //return this.adminService.getAdminById(id);
    const admin = this.adminService.getAdminById(id);
    if (!admin) {
      throw new NotFoundException(
        {
          status: HttpStatus.NOT_FOUND,
          message: "Admin not found"
      }
      );
    } 
    return admin;
  }

//ADD ADMIN 
//feature=2 

@Post('addadmin')
@UsePipes(new ValidationPipe())
@UseGuards(SessionGuard)
addAdmin(@Body() data:adminDTO,@Session() session): object {
  const admin = this.adminService.addAdmin(session.email,data);
  if (!admin) {
    throw new NotFoundException(
      {
        status: HttpStatus.NOT_FOUND,
        message: "Data not Inserted"
    }
    );
  } 
  return admin;

}

//UPDATE ADMIN

//feature=3

@Put('/updateadmin')
@UseGuards(SessionGuard)
@UsePipes(new ValidationPipe())
updateAdmin(@Body() data: adminDTO, @Session() session): object {
  console.log(session.email);
  return this.adminService.updateAdmin(session.email, data);
}

@Put('/updateadmin/:id')
@UsePipes(new ValidationPipe())
updateAdminbyID(@Param('') id:number,@Body() data:adminDTO): object{
    return this.adminService.updateadminby(id,data);
}

//delete admin
//feature=4

@UseGuards(SessionGuard)
@Delete('delete/:id')
deleteAdmin(@Param('id')id: number): object {
  
  return this.adminService.deleteAdmin(id);
}
//get admin info  
/*
@Get('alladmin')
  getAllAdmins( @Body()data:adminDTO): object {
    return this.adminService.getAllAdmin(data);
  }
  */
 //feature=5

@UseGuards(SessionGuard)
@Get('alladmin')
getAllAdmins(): object {
  const admin = this.adminService.getAllAdmin();
  if (!admin) {
    throw new NotFoundException(
      {
        status: HttpStatus.NOT_FOUND,
        message: "Data not Inserted"
    }
    );
  } 
  return admin;
}



//upload file
//feature=6
  @Post(('/upload'))
  @UseInterceptors(FileInterceptor('myfile',
  { fileFilter: (req, file, cb) => {
      if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg|pdf)$/))
       cb(null, true);
      else {
      cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
      }
      },
      limits: { fileSize: 300000000 },
      storage:diskStorage({
      destination: './uploads',
      filename: function (req, file, cb) {
      cb(null,Date.now()+file.originalname)
      },
      })
      }
  ))
  uploadFile(@UploadedFile() myfileobj: Express.Multer.File):object
  {
   console.log(myfileobj)   
  return ({message:"file uploaded"});
  }
  
  //feature=7
  @Get('/getimage/:name')
  getImages(@Param('name') name, @Res() res) {
   res.sendFile(name,{ root: './uploads' })

   }
   
//login
//feature=8
@UsePipes(new ValidationPipe())
    @Post('signup')
    signup(@Body() mydata: adminDTO, @UploadedFile() imageobj: Express.Multer.File) {
        console.log(mydata);
        console.log(imageobj.filename);
        mydata.filenames = imageobj.filename;
        return this.adminService.signup(mydata);

    }

//feature=9
    @Post('/signin')
   

    

    
    signIn(@Body() data: adminDTO, @Session() session: Record<string, any>) {
      const isSignInSuccessful = this.adminService.signIn(data);
      if (isSignInSuccessful) {
        session.email = data.email;
        return true;
      } else {
        throw new UnauthorizedException('Invalid email or password');
      }
    }

    @Get('signout')
    signOut(data:adminDTO,@Session() session: Record<string, any>) {
      // Clear session variables associated with the admin's session
      if(session.email){
      session.destroy();
      return { message: 'Sign-out successful' };
      }
      else{
        return { message: 'already signed out' };
      }
      
    }
   
//AdminProfile
//feature=10
@UseGuards(SessionGuard) 
@Post('addprofile')

addProfile(@Body() data:adminProfileDTO): object {

return this.adminService.addProfile(data);
}
//feature=11
@Put('/updateprofile')
@UseGuards(SessionGuard)
@UsePipes(new ValidationPipe())
updateAdminProfile(@Body() data: adminProfileDTO, @Session() session): object {
  console.log(session.email);
  return this.adminService.updateprofile(session.email, data);
}
 
//feature=12
@Get("alluser")
@UseGuards(SessionGuard)
getAllusers(): object {
  const admin = this.adminService.getAlluser();
  if (!admin) {
    throw new NotFoundException(
      {
        status: HttpStatus.NOT_FOUND,
        message: "Data not Inserted"
    }
    );
  } 
  return admin;
}
//features=13
@Get('allevents')
  getAllEvents(): object {
  return this.adminService.getAllEvents();
  }

  @Get(':adminId/profile')
  async getAdminProfile(@Param('adminId') adminId: number) {
    const adminProfile = await this.adminService.getAdminProfile(adminId);
    return adminProfile;
  }

  @Get('profile/:adminId')
  async GetAdminProfile(@Param('id') id: number) {
    const adminProfile = await this.adminService.ShowAdminProfile(id);
    return adminProfile;
  }

}
 