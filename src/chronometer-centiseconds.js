class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1; 
      if (printTimeCallback) {
        printTimeCallback()
      }
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return this.currentTime / 100;
  }

  getCentiseconds() {
    return this.currentTime % 10;
  }

  computeTwoDigitNumber(value) {
    const valueAsAString = value.toString();
      if (valueAsAString.length === 1) {
      return "0"+valueAsAString
    } else {
      return valueAsAString;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    const mins = this.computeTwoDigitNumber(this.getMinutes());
    const secs = this.computeTwoDigitNumber(this.getSeconds());
    const centi = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${mins}:${secs}.${centi}`
  }
}
