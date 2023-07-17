import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class MeetupsService {
  constructor(
    @InjectQueue('join') private joinQueue: Queue,
  ) {}

  async join(meetupId: number, userId: number) {
    console.log('MeetupsService - join');
    
    await this.joinQueue.add('addJoin',
      { meetupId, userId },
      { removeOnComplete: true, removeOnFail: true },
    )
    // console.log('meetupId: ', meetupId, ', userId: ', userId);
    // return new Promise((resolve, reject) => {
    //   resolve({ message: '참여 성공' });
    // })
    return
  }
}
