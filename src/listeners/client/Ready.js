const { Listener } = require('discord-akairo');

class ReadyListener extends Listener {
  constructor() {
    super('ready', {
      event: 'ready',
      emitter: 'client',
      category: 'client',
    });
  }

  exec() {
    return this.client.logger.info(`${this.client.user.tag} is ready to serve!`);
  }
}

module.exports = ReadyListener;
