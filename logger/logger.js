const { createLogger, format, transports } = require("winston");
const winstonTimestampColorize = require('winston-timestamp-colorize');

module.exports = createLogger({
  format: format.combine(
    format.splat(),
    format.timestamp(),
    format.colorize(),
    winstonTimestampColorize({ color: 'red' }),
    format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)),
    transports: [
    new transports.File({
      maxsize: 5000000,
      maxFiles: 5,
      filename: `${__dirname}/../logs/log-api.log`,
    }),
    new transports.Console({
      level: 'debug',
    })
  ]
});
