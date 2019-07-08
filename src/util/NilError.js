const Messages = {
  // Extendable related
  INVALID_STRUCT_TYPE: struct => `Invalid struct type ${struct}`,

  // Miscellaneous
  INVALID_STATUS_TYPE: type => `Invalid status type ${type}`,

  // Api errors
  INVALID_API_RESPONSE: 'Invalid api response',
};

class NilError extends Error {
  constructor(key, ...args) {
    const message = typeof Messages[key] === 'function' ? Messages[key](...args) : Messages[key];
    super(message);

    this.code = key;
  }

  get name() {
    return `NilError [${this.code}]`;
  }
}

module.exports = NilError;
