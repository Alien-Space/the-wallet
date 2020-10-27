import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Document } from '.';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar', { nullable: false })
  name!: string;

  @Column('varchar', { nullable: false })
  email!: string;

  @Column('varchar')
  contact!: string;

  @Column('varchar')
  sex!: string;

  @Column('varchar')
  address!: string;

  @Column('varchar')
  password!: string;

  @OneToMany(() => Document, (document) => document.id)
  documents!: Document[];
}
