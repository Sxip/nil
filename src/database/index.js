const { sequelize } = require('./models');
const logger = require('../Logger');

module.exports = () => sequelize.authenticate()
  .then(() => logger.info('Database connection has been established successfully!'))
  .then(() => sequelize.sync());
