const { AkairoModule } = require('discord-akairo');

class Extendable extends AkairoModule {
  constructor(id, { category = '', appliesTo = [], ignore = [] }) {
    super(id, category);

    /**
     * The Discord class this extendable is for
     * @type {Array<string>}
     * @public
     */
    this.appliesTo = appliesTo;

    /**
     * Properties to ignore
     * @type {Array<string>}
     * @public
     */
    this.ignore = ignore;
  }
}

module.exports = Extendable;
