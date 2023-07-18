import { OnQueueActive, Process, Processor } from "@nestjs/bull";
import { Job } from "bull";
import { MeetupsService } from "./meetups.service";

@Processor('join')
export class MeetupsConsumer {
  constructor(private readonly meetupsService: MeetupsService) {}

  @OnQueueActive()
  @Process('addJoin')
  async addJoin(job: Job) {
    // console.log(job.data);
    return await this.meetupsService.addJoin(job.data.meetupId, job.data.userId, job.data.eventName);
  }
}
