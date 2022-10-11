class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    }

  start(printTimeCallback) {
    const intervalID = setInterval(() => {
      this.currentTime += 1; 
      if (printTimeCallback) {
        printTimeCallback()
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
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
    clearInterval(intervalID);  
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}

