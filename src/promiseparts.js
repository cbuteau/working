
export class PromiseParts {
  constructor() {
    let ptr = this;
    this._promise = new Promise(function(resolve, reject) {
      ptr.resolve = resolve;
      ptr.reject = reject;
    })
  }

  get promise() {
    return this._promise;
  }
}
