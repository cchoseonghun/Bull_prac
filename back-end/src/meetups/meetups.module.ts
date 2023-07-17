import { Module } from '@nestjs/common';
import { MeetupsController } from './meetups.controller';
import { MeetupsService } from './meetups.service';
import { BullModule } from '@nestjs/bull';
import { MeetupsConsumer } from './meetups.consumer';

@Module({
  imports: [BullModule.registerQueue({
    name: 'join',
  }), ], 
  controllers: [MeetupsController],
  providers: [MeetupsService, MeetupsConsumer]
})
export class MeetupsModule {}
