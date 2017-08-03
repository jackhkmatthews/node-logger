# Node-logger

A JavaScript class for parsing logging color coded messages to the console.

This project was used as a learning tool for logging and Behaviour Driven Development with Mocha, Chai and istanbul (tests can be ran with `npm test`).

### Installation

`node-logger` can be installed as a node-module by adding `"logger": "git://github.com/jackhkmatthews/node-logger#v[VERSION_NUMBER]"` to the dependencies in your `package.json` file and running `npm install`.

### Usage

Import the class in your code, instantiate it and set the desired logging level from `['error', 'warn', 'info', 'success']`:

```js
const Logger = require('../lib/logger.js').Logger;
const logger = new Logger();
logger.debugLevel = 'info';
```

Debug levels and messages can then be parsed to `logger.log` for color coded console output. Only  messages 'above' the debug level will be outputted to the console:

```js
message = logger.log('error', 'hello'); // RED
message = logger.log('warn', 'hello'); // NORMAL
message = logger.log('info', 'hello'); // YELLOW
message = logger.log('success', 'hello'); // GREEN but not outputted given the above debugLevel.
```