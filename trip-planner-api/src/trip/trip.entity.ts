import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';
import { Destination } from '../destination/destination.entity';

@Entity()
export class Trip {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Destination, (destination) => destination.id, { onDelete: 'CASCADE' })
  destination: Destination;

  @Column({ type: 'timestamp' })
  startDate: Date;

  @Column({ type: 'timestamp' })
  endDate: Date;

  @Column({ type: 'decimal', precision: 10, scale: 6, nullable: true })
  homeLatitude: number;

  @Column({ type: 'decimal', precision: 10, scale: 6, nullable: true })
  homeLongitude: number;

  @Column({ type: 'text', nullable: true })
  homeAddress: string;
}