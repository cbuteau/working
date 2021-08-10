

class TroubleMaker {
  constructor() {
    this.workers = {};
    this.isSetup = false;
  }

  start(job) {
    if (!job.module) throw new Error('Missing module');
    if (!job.parameters) throw new Error('Missing parameters');
  }
}
