const { AkairoClient, CommandHandler, InhibitorHandler, ListenerHandler } = require('discord-akairo');
const { ExtendableHandler, AkairoSettingsProvider } = require('./akairo');
const { Settings } = require('../database/models');
const logger = require('../Logger');
const Util = require('../util');
const path = require('path');

class Client extends AkairoClient {
  constructor() {
    super({
      disableEveryone: true,
      fetchAllMembers: true,
      disabledEvents: ['TYPING_START'],
    });

    /**
     * The Command handler of this client
     * @type {CommandHandler}
     * @public
     */
    this.commandHandler = new CommandHandler(this, {
      directory: path.join(__dirname, '..', 'commands'),
      prefix: ({ guild }) => this.settings.prefix(guild),
      defaultCooldown: 2 * 1000,
      allowMention: true,
    });

    /**
     * The Inhibitor handler of this client
     * @type {InhibitorHandler}
     * @public
     */
    this.inhibitorHandler = new InhibitorHandler(this, {
      directory: path.join(__dirname, '..', 'inhibitors'),
    });

    /**
     * The listener handler of this client
     * @type {ListenerHandler}
     * @public
     */
    this.listenerHandler = new ListenerHandler(this, {
      directory: path.join(__dirname, '..', 'listeners'),
    });

    /**
     * The extendable handler of this client
     * @type {ExtendableHandler}
     * @public
     */
    this.extendableHandler = new ExtendableHandler(this, {
      directory: path.join(__dirname, '..', 'extendables'),
    });

    /**
     * The settings sequelize provider of this client
     * @type {SequelizeProvider}
     * @public
     */
    this.settings = new AkairoSettingsProvider(Settings, {
      dataColumn: 'settings',
    });

    /**
     * The utility methods of this client
     * @type {ClientUtil}
     * @public
     */
    this.util = new Util(this);
  }

  /**
   * Winston logger instance
   * @type {Winston.Logger}
   * @readonly
   */
  get logger() {
    return logger;
  }

  /**
   * Prepares the client
   * @returns {this}
   * @private
   */
  prepare() {
    this.commandHandler.useInhibitorHandler(this.inhibitorHandler);
    this.commandHandler.useListenerHandler(this.listenerHandler);

    this.listenerHandler.setEmitters({
      commandHandler: this.commandHandler,
      inhibitorHandler: this.inhibitorHandler,
      listenerHandler: this.listenerHandler,
    });

    this.commandHandler.loadAll();
    this.inhibitorHandler.loadAll();
    this.listenerHandler.loadAll();
    this.extendableHandler.loadAll();
    return this;
  }

  /**
   * Attempts to Authenticate the client
   * @param {string} token Discord authentication token
   * @returns {Promise<void>}
   * @public
   */
  async authenticate(token) {
    await this.login(token);
    this.logger.info('Authenticated successfully!');
  }
}


module.exports = Client;
