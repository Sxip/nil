require('dotenv').config();

const database = require('./database');
const Client = require('./client');
const logger = require('./Logger');

const client = new Client();

database()
  .then(() => {
    client.prepare()
      .authenticate(process.env.DISCORD_TOKEN);
  })
  .catch(error => logger.error(`Unexpected error occurred ${error.message}`));
