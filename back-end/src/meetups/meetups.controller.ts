import { Body, Controller, Param, Post } from '@nestjs/common';
import { MeetupsService } from './meetups.service';

@Controller('api/meetups')
export class MeetupsController {
  constructor(private readonly meetupsService: MeetupsService) {}

  @Post(':meetupId/join')
  async join(
    @Param('meetupId') meetupId: number, 
    @Body('userId') userId: number,
  // ): Promise<Object> {
  ) {
    console.log('MeetupsController - join before');
    const result = await this.meetupsService.join(meetupId, userId);
    console.log('MeetupsController - join after');
    console.log(result)
    return result;
  }
}
