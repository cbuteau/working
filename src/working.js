
import RafRepeater from './RafRepeater'


class Working {
  constructor() {

  }

  raf(thinkFunc, options) {
    return new RafRepeater(thinkFunc, options);
  }
}
