
import RafRepeater from './rafrepeater'


class Working {
  constructor() {

  }

  raf(thinkFunc, options) {
    return new RafRepeater(thinkFunc, options);
  }
}
