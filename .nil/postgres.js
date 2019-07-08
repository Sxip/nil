module.exports = {
    development: {
      username: 'postgres',
      password: 'dev',
      database: 'nil',
      host: '127.0.0.1',
      dialect: 'postgres',
      logging: false,
    },
    production: {
      use_env_variable: 'DATABASE_URL',
      host: '127.0.0.1',
      dialect: 'postgres',
    },
  };