const { MessageEmbed, Util: { resolveColor } } = require('discord.js');
const { Extendable } = require('../client/akairo');
const { NilColors } = require('../util/Constants');
const NilError = require('../util/NilError');

/**
 * Message status icon
 * @type {Object}
 * @constant
 */
const MessageStatus = {
  success: {
    icon: '✓',
  },
  error: {
    icon: '✘',
  },
};

class MessageExtendable extends Extendable {
  constructor() {
    super('message', {
      appliesTo: ['Message'],
    });
  }

  /**
   * Sends a status message
   * @param {string} type Status type
   * @param {string} message Message of the status to send
   * @returns {Promise<void>}
   * @public
   */
  status(type, message) {
    const status = MessageStatus[type];
    if (!status) throw new NilError('INVALID_STATUS_TYPE', type);

    return this.channel.send(`${status.icon} ${message ? message : ''}`);
  }

  /**
   * Makes a MessageEmbed
   * @param {Object} data Embed data
   * @returns {MessageEmbed}
   * @public
   */
  embed(data) {
    if (data) {
      // Refactor
      if (data.color) data.color = resolveColor(data.color);
      else data.color = NilColors.default;

      if (typeof data.footer === 'object') data.footer = { text: data.footer.text, icon_url: data.footer.icon_url };
      else data.footer = { text: this.author.username, icon_url: this.author.avatarURL() };
    }
    return new MessageEmbed(data);
  }
}

module.exports = MessageExtendable;
