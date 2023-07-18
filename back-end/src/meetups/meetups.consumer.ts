import { InjectQueue, OnGlobalQueueActive, OnGlobalQueueCompleted, OnQueueActive, Process, Processor } from "@nestjs/bull";
import { Job, Queue } from "bull";
import { MeetupsService } from "./meetups.service";

@Processor('join')
export class MeetupsConsumer {
  constructor(
    private readonly meetupsService: MeetupsService, 
    @InjectQueue('join') private joinQueue: Queue,
  ) {}

  // @OnQueueActive()
  // @OnGlobalQueueCompleted()
  @OnGlobalQueueActive()
  @Process('addJoin')
  async addJoin(job: Job) {
    // console.log(job.data);
    return await this.meetupsService.addJoin(job.data.meetupId, job.data.userId, job.data.eventName);
    // const job = await this.joinQueue.getJob(jobId);
    // console.log('(Global) on completed: job ', job.id, ' -> result: ', result);
  }
}
