const { createLogger, format, transports } = require('winston');
const { combine, colorize, simple, timestamp, printf } = format;

/**
 * Creates a new winston logger instance
 */
const logger = createLogger({
  transports: [
    new transports.Console({
      handleExceptions: true,
      format: combine(
        colorize(),
        timestamp({ format: 'HH:mm:ss' }),
        simple(),
        printf(info => `${info.timestamp} ${info.level}: ${info.message}`),
      ),
    }),
  ],
  exitOnError: false,
});

module.exports = logger;
