import { Destination } from 'src/destination/destination.entity';
import { User } from 'src/user/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Budget {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Destination, (destination) => destination.id, { onDelete: 'CASCADE' })
  destination: Destination;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  startingAmount: number;

  @Column({ type: 'decimal', precision: 10, scale: 6, default: 0 })
  remaining: number;
}