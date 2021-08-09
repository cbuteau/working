
import RafRepeater from './rafrepeater'
import WorkQueue from './workqueue'


class Working {
  constructor() {

  }

  raf(thinkFunc, options) {
    return new RafRepeater(thinkFunc, options);
  }

  get workqueue() {
    return WorkQueue;
  }
}
