import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  PersonID: number;

  @Column()
  LastName: string;

  @Column()
  FirstName: string;

  @Column()
  Address: string;

  @Column()
  City: string;

}