const { Command } = require('discord-akairo');

class AkairoCommand extends Command {
  constructor(id, options = {}) {
    super(id, {
      typing: options.typings || true,
      ...options,
    });
  }
}

module.exports = AkairoCommand;
