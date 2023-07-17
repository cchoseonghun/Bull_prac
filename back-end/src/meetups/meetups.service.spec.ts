import { Test, TestingModule } from '@nestjs/testing';
import { MeetupsService } from './meetups.service';

describe('MeetupsService', () => {
  let meetupsService: MeetupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeetupsService],
    }).compile();

    meetupsService = module.get<MeetupsService>(MeetupsService);
  });

  describe('meetups', () => {
    it('join', () => {
      const meetupId = 12;
      const userId = 34;

      const mockResult = new Promise((resolve, reject) => {
        resolve({ message: '참여 성공' });
      });      
      const joinSpy = jest.spyOn(meetupsService, 'join').mockResolvedValue(mockResult);
      const result = meetupsService.join(meetupId, userId);

      expect(joinSpy).toHaveBeenCalledWith(meetupId, userId);
      expect(result).toEqual(mockResult);
    })
  })
});
