
import { PromiseParts } from "./promiseparts"
import { RafRepeater } from "./rafrepeater"

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
    this._raf.start();
    return obj.parts.promise;
  }

  _think() {

  }
}
