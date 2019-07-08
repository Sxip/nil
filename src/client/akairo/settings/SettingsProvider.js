const { SequelizeProvider } = require('discord-akairo');

class AkairoSettingsProvider extends SequelizeProvider {
  /**
   * Gets the prefix of the guild
   * @param {Guild} guild Guild to check
   * @returns {any}
   * @public
   */
  prefix(guild) {
    return this.get(guild, 'prefix', process.env.NIL_COMMAND_PREFIX);
  }
}

module.exports = AkairoSettingsProvider;
