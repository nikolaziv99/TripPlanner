import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripModule } from './trip/trip.module';
import { DestinationModule } from './destination/destination.module';
import { ActivityModule } from './activity/activity.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BudgetModule } from './budget/budget.module';
import { ExpenseModule } from './expense/expense.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nest_user',
      password: 'admin',
      database: 'trip_planner',
      autoLoadEntities: true,
      synchronize: true, // Use migrations in production
    }),
    TripModule,
    DestinationModule,
    ActivityModule,
    UserModule,
    AuthModule,
    BudgetModule,
    ExpenseModule
  ],
})
export class AppModule {}
