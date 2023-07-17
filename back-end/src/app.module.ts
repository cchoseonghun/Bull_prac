import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MeetupsModule } from './meetups/meetups.module';

@Module({
  imports: [MeetupsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
