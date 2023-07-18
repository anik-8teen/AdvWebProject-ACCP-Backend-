/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { OrganizerController } from "./organizer.controller";
import { OrganizerService } from "./organizer.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EventEntity } from "./event.entity ";



@Module({
    imports: [TypeOrmModule.forFeature([EventEntity])],
    controllers: [OrganizerController],
    providers: [OrganizerService]
  })
  export class organizerModule {}