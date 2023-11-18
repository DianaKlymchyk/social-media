import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  PersonID: number;

  @Column({nullable: true})
  LastName: string;

  @Column({nullable: true})
  FirstName: string;

  @Column({nullable: true})
  Address: string;

  @Column({nullable: true})
  City: string;
}

/// Person - опис структури без якихось конкретних даних, застосується для всіх людей
// name: string
// age: 20

// Maryna: Person
// + salary (Error, бо не описано)
// Alex: Person