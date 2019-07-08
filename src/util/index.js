const { ClientUtil } = require('discord-akairo');

class Util extends ClientUtil {
  /**
   * Apply to class structure
   * @param {Structure} structure Discord structure
   * @param {AkairoModule} target Target module
   * @param {Array<string>} ignore Properties to ignore
   * @static
   */
  static applyToClass(structure, target, ignore) {
    for (const prop of Object.getOwnPropertyNames(target)) {
      if (ignore.includes(prop)) continue;

      Object.defineProperty(
        structure.prototype,
        prop,
        Object.getOwnPropertyDescriptor(target, prop)
      );
    }
  }
}

module.exports = Util;
