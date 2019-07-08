module.exports = {
  /**
   * @returns {Extendable}
   */
  Extendable: require('./extendables/Extendable'),

  /**
   * @returns {ExtendableHandler}
   */
  ExtendableHandler: require('./extendables/ExtendableHandler'),

  /**
   * @returns {AkairoCommand}
   */
  AkairoCommand: require('./Command'),

  /**
  * @returns {AkairoSettingsProvider}
  */
  AkairoSettingsProvider: require('./settings/SettingsProvider'),
};
