"use strict";

const fs = require("fs");
const { createLogger, format } = require("winston");
const { combine, printf } = format;
const dailyRotateFile = require("winston-daily-rotate-file");
const moment = require("moment");

const config = require("../config/environment");

if (!fs.existsSync(config.logDir)) {
  fs.mkdirSync(config.logDir);
}

const logFormat = printf(info => {
  return `{"level":"${info.level}", "timestamp":${moment().format(
    "YYYY-MM-DD HH:mm:ss"
  )}, "message": "${info.message}"}`;
});

const logger = createLogger({
  format: combine(logFormat),
  transports: [
    new dailyRotateFile({
      filename: `${config.logDir}/%DATE%.log`,
      datePattern: "YYYY-MM-DD"
    })
  ],
  exitOnError: false
});

module.exports = logger;
