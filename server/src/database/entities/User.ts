import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Document } from '.';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('increment')
  id!: string;

  @Column('varchar', { nullable: false })
  name!: string;

  @Column('varchar', { nullable: false })
  email!: string;

  @Column('varchar')
  pin!: string;

  @OneToMany(() => Document, (document) => document.id)
  documents!: Document[];
}
