/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column,  } from 'typeorm';

@Entity("event")
export class EventEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  place: string;

  @Column()
  time: string;
 

}