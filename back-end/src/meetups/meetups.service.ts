import { InjectQueue } from '@nestjs/bull';
import { HttpException, Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class MeetupsService {
  constructor(
    @InjectQueue('join') private joinQueue: Queue,
    private eventEmitter: EventEmitter2
    ) {}

  async join(meetupId: number, userId: number) {
    console.log('MeetupsService - join');
    const eventName = uuidv4();
    await this.joinQueue.add('addJoin',
      { meetupId, userId, eventName },
      { removeOnComplete: true, removeOnFail: true },
    )
    return this.waitFinish(eventName, 2);
  }

  private waitFinish(eventName: string, sec: number) {
    console.log('MeetupsService - waitFinish');
    return new Promise((resolve, reject) => {
      const wait = setTimeout(() => {
        this.eventEmitter.removeAllListeners(eventName);
        resolve({ message: '다시 시도해주세요.' });
      }, sec * 1000);
      const listenFn = ({ success, exception }: { success: boolean, exception?: HttpException }) => {
        clearTimeout(wait)
        this.eventEmitter.removeAllListeners(eventName);
        success ? 
          resolve({ message: '참여 성공' }) : 
          reject(exception);
      };
      this.eventEmitter.addListener(eventName, listenFn);
    });
  }

  async addJoin(meetupId: number, userId: number, eventName: string) {
    console.log('MeetupsService - addJoin - meetupId: ', meetupId, ', userId: ', userId);
    try {
      return this.eventEmitter.emit(eventName, { success: true });
    } catch (err) {
      return this.eventEmitter.emit(eventName, { success: false, exception: err });
    }
  }
}
