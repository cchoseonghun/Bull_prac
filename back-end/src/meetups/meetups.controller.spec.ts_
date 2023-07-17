import { Test, TestingModule } from '@nestjs/testing';
import { MeetupsController } from './meetups.controller';
import { MeetupsService } from './meetups.service';

describe('MeetupsController', () => {
  let meetupsController: MeetupsController;
  let meetupsService: MeetupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeetupsController],
      providers: [MeetupsService], 
    }).compile();

    meetupsController = module.get<MeetupsController>(MeetupsController);
    meetupsService = module.get<MeetupsService>(MeetupsService);
  });

  describe('meetups', () => {
    it('POST /api/meetups/:meetupId/join', () => {
      const meetupId = 12;
      const userId = 34;

      const mockResult = new Promise((resolve, reject) => {
        resolve({ message: '참여 성공' });
      });
      // jest.spyOn(meetupsService, 'join').mockImplementation(() => result);
      // mockImplementation: 모의 함수를 직접 구현

      jest.spyOn(meetupsService, 'join').mockResolvedValue(mockResult);
      // mockResolvedValue: Promise를 반환하는 모의 함수를 정의할 때 사용
      // -> 비동기 함수가 반환하는 Promise의 해결값을 지정
      
      expect(meetupsService.join(meetupId, userId)).toBe(mockResult);
    })
  })
});
