/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";

import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { eventDTO } from "./event.dto";
import { EventEntity } from "./event.entity ";



@Injectable()
export class OrganizerService{
    
    constructor(
        @InjectRepository(EventEntity)
        private eventrepo:Repository<EventEntity>,)
        {}



    async addEvent(data): Promise<EventEntity[]> {
        return this.eventrepo.save(data);
    }


    async updateEvent(data: eventDTO): Promise<EventEntity> {
        await this.eventrepo.update(data.id, data);
        return this.eventrepo.findOneBy({ id: data.id }); 
    }
    
    async updateEventById(id: number, data: eventDTO): Promise<EventEntity> {
        await  this.eventrepo.update(id, data);
        return this.eventrepo.findOneBy({ id});
    }


    getEventById(id: number): Promise<EventEntity> {
        return this.eventrepo.findOneBy({ id });
    }



    async deleteEventById(id: number ): Promise<void> {
        await this.eventrepo.delete(id);
    }


    getAllEvents(): Promise<EventEntity[]> {
        return this.eventrepo.find();
    
      }
}