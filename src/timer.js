export default class {
  constructor(name, logger) {
    this.name = name;
    this.startTime = Date.now();
    this.endTime = null;
    this.logger = logger || { debug: () => {} };
  }

  get elapsed() {
    return (this.endTime || Date.now()) - this.startTime;
  }

  end() {
    this.endTime = Date.now();
    this.logger.debug(`${this.name} took ${this.elapsed} ms`);
  }
}
