const { AkairoCommand } = require('../client/akairo');

class TestCommand extends AkairoCommand {
  constructor() {
    super('test', {
      aliases: ['test'],
    });
  }

  exec(message) {
    return message.status('success', 'Testing...');
  }
}

module.exports = TestCommand;
