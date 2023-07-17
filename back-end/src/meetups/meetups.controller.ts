import { Body, Controller, Param, Post } from '@nestjs/common';
import { MeetupsService } from './meetups.service';

@Controller('api/meetups')
export class MeetupsController {
  constructor(private readonly meetupsService: MeetupsService) {}

  @Post(':meetupId/join')
  join(
    @Param('meetupId') meetupId: number, 
    @Body('userId') userId: number,
  ): Promise<Object> {
    return this.meetupsService.join(meetupId, userId);
  }
}
