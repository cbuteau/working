
import RafRepeater from './rafrepeater'
import WorkQueue from './workqueue'
import TroubleMaker from './troublemaker'

class Working {
  constructor() {

  }

  raf(thinkFunc, options) {
    return new RafRepeater(thinkFunc, options);
  }

  get workqueue() {
    return WorkQueue;
  }

  get webjobs() {
    return TroubleMaker;
  }
}
