import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MeetupsModule } from './meetups/meetups.module';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [MeetupsModule, BullModule.forRoot({
    redis: {
      host: 'localhost',
      port: 6379,
    },
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
