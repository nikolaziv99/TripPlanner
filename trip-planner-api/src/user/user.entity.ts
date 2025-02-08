import { Nationality } from 'src/common/nationality.entity';
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Currency } from 'src/common/currencies.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ type: 'date' })
  birthday: Date;

  @Column({ type: 'enum', enum: Nationality, default: Nationality.OTHER })
  nationality: Nationality;

  @Column({ type: 'enum', enum: Currency, default: Currency.EUR })
  currency: Currency;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}

