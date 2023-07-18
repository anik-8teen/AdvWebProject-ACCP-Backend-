/* eslint-disable prettier/prettier */
import { UserEntity } from "src/User/user.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AdminProfile } from "./adminprofile.entity";

@Entity("admin")
export class AdminEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  filenames: string;

  @OneToOne(() => AdminProfile, adminProfile => adminProfile.admin, { cascade: true })
  @JoinColumn()
  adminProfile: AdminProfile;

  @OneToMany(() => UserEntity, user => user.admin)
  users: UserEntity[];
}
