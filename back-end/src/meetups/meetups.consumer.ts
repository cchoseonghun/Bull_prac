import { OnQueueActive, Process, Processor } from "@nestjs/bull";
import { Job } from "bull";

@Processor('join')
export class MeetupsConsumer {

  // @OnQueueActive()
  @Process('addJoin')
  async addJoin(job: Job) {
    console.log(job.data);
    return {};
  }

  // @OnQueueActive()
  // onActive(job: Job) {
  //   console.log(
  //     `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
  //   );
  // }
}