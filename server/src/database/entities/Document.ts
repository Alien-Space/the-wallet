import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '.';

@Entity('documents')
export default class Card {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar')
  type!: string;

  @Column('varchar')
  password!: string;

  @Column('varchar')
  number!: string;

  @Column('varchar')
  name!: string;

  @ManyToOne(() => User, (user) => user.documents)
  user!: User;
}
