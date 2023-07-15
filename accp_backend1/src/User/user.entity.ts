/* eslint-disable prettier/prettier */
import { AdminEntity } from 'src/Admin/admin.entity';
import { Column, Entity, ManyToOne,  PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @ManyToOne(()=>AdminEntity,admin=>admin.users)
    admin: AdminEntity;
}


