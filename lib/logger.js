class Logger {

  constructor(){
    this.debugLevel = 'info';
    this.levels = ['error', 'warn', 'info', 'success'];
  }

  log(level, message) {
    if (typeof message !== 'string') {
      message = JSON.stringify(message);
    }
    switch (level) {
      case 'error':
        console.log('\x1b[31m%s\x1b[0m', `${level}: ${message}`);
        return `${level}: ${message}`;
      case 'warn':
        if (this.levels.indexOf(level) <= this.levels.indexOf(this.debugLevel)) {
          console.log('\x1b[33m%s\x1b[0m', `${level}: ${message}`);
          return `${level}: ${message}`;
        }
        break;
      case 'info':
        if (this.levels.indexOf(level) <= this.levels.indexOf(this.debugLevel)) {
          console.log(`${level}: ${message}`);
          return `${level}: ${message}`;
        }
        break;
      case 'success':
        if (this.levels.indexOf(level) <= this.levels.indexOf(this.debugLevel)) {
          console.log('\x1b[32m%s\x1b[0m', `${level}: ${message}`);
          return `${level}: ${message}`;
        }
        break;
      default:
        console.log(`unrecognised level: ${message}`);
        return `unrecognised level: ${message}`;
    }
  }
}

exports.Logger = Logger;