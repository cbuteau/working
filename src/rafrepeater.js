
const DEFAULT_OPTIONS = {
  forgetTry: false,
  notContinue: false
};

const SPANS = {
  ONE: 100,
  TWO: 200,
  TWO_FIFTY: 250
};

function createClosure(repeaterPtr, callback, options) {
  return function() {
    var continueRun;
    if (options.forgetTry) {
      // Save complexity without a try catch when solidified.
      continueRun = callback(options);
    } else {
      try {
        continueRun = callback(options);
      } catch (e) {
        console.log(options.name);
        console.error(e);
        continueRun = true;
        if (options.notContinue) {
          continueRun = false;
        }
      }
    }
    if (continueRun) {
      repeaterPtr.start();
    } else {
      repeaterPtr._isRunning = false;
    }
  };
}

class TimeStamp {
  constructor(span) {
    this._start = Date.now();
    this._span = span;
  }

  checkExpired() {
    let now = Date.now();
    return (now - this._start) >= this._span;
  }
}



class RafRepeater {
  constructor(callback, options) {
    var tempOpts = options ? options : {};
    this.options = Object.assign(tempOpts, DEFAULT_OPTIONS);
    this.callback = createClosure(this, callback, this.options);
    this.start();
  }

  start() {
    this.token = requestAnimationFrame(this.callback);
    this._isRunning = true;
  }

  pause() {
    cancelAnimationFrame(this.token);
    this._isRunning =false;
  }

  ts(span) {
    return new TimeStamp(span);
  }

  get isRunning() {
    return this._isRunning;
  }

  get SPANS() {
    return SPANS;
  }
};

export default RafRepeater
