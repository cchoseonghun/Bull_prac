import { Injectable } from '@nestjs/common';

@Injectable()
export class MeetupsService {

  join(meetupId: number, userId: number) {
    console.log('meetupId: ', meetupId, ', userId: ', userId);
    return new Promise((resolve, reject) => {
      resolve({ message: '참여 성공' });
    })
  }
}
