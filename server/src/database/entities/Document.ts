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
  @PrimaryGeneratedColumn('increment')
  id!: string;

  @Column('varchar')
  type!: string;

  @Column('varchar')
  password!: string;

  @Column('varchar')
  number!: string;

  @Column('varchar')
  name!: string;

  @Column('datetime')
  emissionDate!: Date;

  @Column('datetime')
  expirationDate!: Date;

  @ManyToOne(() => User, (user) => user.documents)
  user!: User;
}
