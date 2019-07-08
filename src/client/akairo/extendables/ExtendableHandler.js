const { AkairoHandler } = require('discord-akairo');
const { Structures } = require('discord.js');
const { applyToClass } = require('../../../util');
const NilError = require('../../../util/NilError');
const Extendable = require('./Extendable');

class ExtendableHandler extends AkairoHandler {
  constructor(client, { directory, classToHandle = Extendable }) {
    super(client, {
      directory,
      classToHandle,
    });

    if (!(classToHandle.prototype instanceof Extendable || classToHandle === Extendable)) {
      throw new NilError('INVALID_CLASS_TO_HANDLE', classToHandle.name, Extendable.name);
    }
  }

  /**
   * Registers an extendable
   * @param {AkairoModule} extendable Extendable to register
   * @param {string} filepath Filepath to the extendable
   * @public
   */
  register(extendable, filepath) {
    super.register(extendable, filepath);

    for (let struct of extendable.appliesTo) {
      const structure = Structures.get(struct);
      if (!structure) throw new NilError('INVALID_STRUCT_TYPE', struct);

      applyToClass(structure, extendable.constructor.prototype, extendable.ignore);
    }
  }
}

module.exports = ExtendableHandler;
