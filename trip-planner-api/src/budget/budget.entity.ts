import { Trip } from 'src/trip/trip.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Budget {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Trip, (trip) => trip.id, { onDelete: 'CASCADE' })
  trip: Trip;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  startingAmount: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  remaining: number;
}