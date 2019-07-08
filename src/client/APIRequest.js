const Bottleneck = require('bottleneck');
const { Axios } = require('axios');

class APIRequest extends Axios {
  constructor({ baseURL = '', timeout = 3 * 1000, rate = 2, limit = 1000, ...options } = {}) {
    super({
      baseURL,
      timeout,
      ...options,
    });

    /**
     * Request bottleneck queue
     * @type {Bottleneck}
     * @private
     */
    this._limiter = new Bottleneck({
      maxConcurrent: rate,
      minTime: limit,
    });
  }

  /**
   * Makes an HTTP bottleneck request
   * @param {AxiosInstance} config Axios configuration
   * @returns {Promise<Object>}
   * @protected
   */
  request(config) {
    return this._limiter.schedule(() => super.request(config));
  }
}

module.exports = APIRequest;
