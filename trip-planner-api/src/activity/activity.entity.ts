import { TransportationOptions } from 'src/common/transportation.entity';
import { Trip } from 'src/trip/trip.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Trip, (trip) => trip.id, { onDelete: 'CASCADE' })
  trip: Trip;

  @Column()
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 6 })
  latitude: number;

  @Column({ type: 'decimal', precision: 10, scale: 6 })
  longitude: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  price: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  stayLength: number;

  @Column({ type: 'enum', enum: TransportationOptions, default: TransportationOptions.ON_FOOT })
  transportSelection: TransportationOptions;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  estimatedJourney: number;
}