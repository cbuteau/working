
import { PromiseParts } from "./promiseparts"
import { RafRepeater } from "./rafrepeater"

const MAX_EMPTY_PASSES = 3;

class WorkQueue {
  constructor() {
    this._raf = new RafRepeater(this._think.bind(this));
    this._queue = [];
  }

  queue(task) {
    let obj = {
      parts: new PromiseParts(),
      task: task
    }
    this._queue.push(obj);
    this.start();
    return obj.parts.promise;
  }

  start() {
    this.emptyPasses = 0;
    this._raf.start();
  }

  _think() {
    let counter;

    while (this._queue.length) {
      let current = this._queue.pop();
      current.task.execute.call(current.task, current.parts);
      counter++;
    }

    if (counter === 0) {
      this.emptyPasses++;
      if (this.emptyPasses >= MAX_EMPTY_PASSES) {
        return false;
      }
    }

    return true;
  }
}

const workqueue = new WorkQueue();
export { workqueue };
