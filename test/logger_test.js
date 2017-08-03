const mocha           = require('mocha');
const describe        = mocha.describe;
const it              = mocha.it;
const chai            = require('chai');
const expect          = chai.expect;

const Logger   = require('../lib/logger.js').Logger;

describe('logger', function() {

  describe('logger.log', function() {

    it('should return a string', function(){
      const logger = new Logger();
      let message = logger.log('info', 'hello');

      expect(message).to.be.a('string');
      expect(message).to.equal('info: hello');

      message = logger.log('info', {this: 'is', the: 'msg'});

      expect(message).to.be.a('string');
      expect(message).to.equal('info: {"this":"is","the":"msg"}');
    });

    it('should log correct type', function(){
      const logger = new Logger();
      logger.debugLevel = 'success';

      let message = logger.log('error', 'hello');
      expect(message.split(':')[0]).to.equal('error');

      message = logger.log('warn', 'hello');
      expect(message.split(':')[0]).to.equal('warn');

      message = logger.log('info', 'hello');
      expect(message.split(':')[0]).to.equal('info');
      
      message = logger.log('success', 'hello');
      expect(message.split(':')[0]).to.equal('success');
      
      message = logger.log('unknown', 'hello');
      expect(message.split(':')[0]).to.equal('unrecognised level');
    });

    it('should only log the correct levels', function() {
      const logger = new Logger();
      logger.debugLevel = 'success';
      let message = logger.log('error', 'hello');
      expect(message).to.be.a('string');
      message = logger.log('warn', 'hello');
      expect(message).to.be.a('string');
      message = logger.log('info', 'hello');
      expect(message).to.be.a('string');
      message = logger.log('success', 'hello');
      expect(message).to.be.a('string');

      logger.debugLevel = 'info';
      message = logger.log('error', 'hello');
      expect(message).to.be.a('string');
      message = logger.log('warn', 'hello');
      expect(message).to.be.a('string');
      message = logger.log('info', 'hello');
      expect(message).to.be.a('string');
      message = logger.log('success', 'hello');
      expect(message).to.be.an('undefined');

      logger.debugLevel = 'warn';
      message = logger.log('error', 'hello');
      expect(message).to.be.a('string');
      message = logger.log('warn', 'hello');
      expect(message).to.be.a('string');
      message = logger.log('info', 'hello');
      expect(message).to.be.an('undefined');
      message = logger.log('success', 'hello');
      expect(message).to.be.an('undefined');

      logger.debugLevel = 'error';
      message = logger.log('error', 'hello');
      expect(message).to.be.a('string');
      message = logger.log('warn', 'hello');
      expect(message).to.be.an('undefined');
      message = logger.log('info', 'hello');
      expect(message).to.be.an('undefined');
      message = logger.log('success', 'hello');
      expect(message).to.be.an('undefined');
    });

  });

});