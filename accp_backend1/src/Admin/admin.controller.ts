/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put,  Res, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';

import { adminDTO } from './admin.dto';
 
import { AdminService } from './admin.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterError, diskStorage } from 'multer';



@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
 
 //GET ADDMIN by ID
  @Get('index/:id')
  getAdminbyId( @Param('id')id:number): object {
    return this.adminService.getAdminById(id);
  }

//ADD ADMIN  
@Post('addadmin')
@UsePipes(new ValidationPipe())
addAdmin(@Body() data:adminDTO): object {

return this.adminService.addAdmin(data);
}

//UPDATE ADMIN
@Put('/updateadmin')
@UsePipes(new ValidationPipe())
updateAdmin( @Body() data:adminDTO): object{
    return this.adminService.updateAdmin(data);
}

@Put('/updateadmin/:id')
@UsePipes(new ValidationPipe())
updateAdminbyID(@Param('') id:number,@Body() data:adminDTO): object{
    return this.adminService.updateadminby(id,data);
}

//delete admin
@Delete(':id')
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
@Get('alladmin')
getAllAdmins(): object {
  return this.adminService.getAllAdmin();
}


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
  
  @Get('/getimage/:name')
  getImages(@Param('name') name, @Res() res) {
   res.sendFile(name,{ root: './uploads' })

   }
   

 
}
