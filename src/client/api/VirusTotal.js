const NilError = require('../../util/NilError');
const APIRequest = require('../APIRequest');

/**
 * Api response types
 * @constant
s */
const ResponseStatusType = {
  unknown: 0,
  success: 1,
};

class VirusTotal extends APIRequest {
  constructor() {
    super({
      baseURL: 'https://www.virustotal.com/vtapi/v2',
      params: { apikey: process.env.VIRUS_TOTAL_KEY },
      limit: 1000,
      rate: 4,
    });
  }

  /**
   * Recieves an file scan report
   * @param {string} hash File hash
   * @returns {Promise<Object>}
   * @public
   */
  async fileReport(hash) {
    const { data: { response_code, total, positives, scan_date } } = await this.get('/file/report', {
      params: { resource: hash },
    });

    if (response_code === ResponseStatusType.success) return { total, positives, scan_date };
    else if (response_code === ResponseStatusType.unknown) return null;
    else throw new NilError('INVALID_API_RESPONSE');
  }
}

module.exports = VirusTotal;
