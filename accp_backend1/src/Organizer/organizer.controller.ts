/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put, Delete,  Res, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { MulterError, diskStorage } from "multer";
import { eventDTO } from "./event.dto";
import { OrganizerService } from "./organizer.service";


//GET ORGANIZER
@Controller('organizer')
export class OrganizerController{
    constructor(private readonly organizerService: OrganizerService){}
    



//ADD EVENT
@Post('addevent')
@UsePipes(new ValidationPipe())
addEvent(@Body() data:eventDTO):object {
return this.organizerService.addEvent(data);
}


//UPDATE EVENT
@Put('/updateevent')
@UsePipes(new ValidationPipe())
updateEvent(@Body() data:eventDTO): object {
    return this.organizerService.updateEvent(data);
}


//UPDATE MODERATOR BY ID
@Put('/updateevent/:id')
@UsePipes(new ValidationPipe())
updateEventbyID(@Param() id:number,@Body() data:eventDTO): object {
    return this.organizerService.updateEventById(id,data);
}


//DELETE MODERATOR
@Delete('/deleteevent/:id')
@UsePipes(new ValidationPipe())
deleteEventbyID(@Param() id:number): object {
  return this.organizerService.deleteEventById(id);
}


//GEL ALL EVENT
@Get('allevents')
  getAllEvents(): object {
  return this.organizerService.getAllEvents();
  }




  
//UPLOAD FILE
@Post(('/upload'))
@UseInterceptors(FileInterceptor('myfile',
{ fileFilter: (req, file, cb) => {
    if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
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


//SEARCH UPLOADED FILE
@Get('/image/:name')
getImages(@Param('name') name, @Res() res) {
 res.sendFile(name,{ root: './uploads' })
 }

}

