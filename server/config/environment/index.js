"use strict";

const path = require("path");
const lodash = require("lodash");

// Set default application environment values
process.env.NODE_ENV = process.env.NODE_ENV || "development";
process.env.PORT = process.env.PORT || 4000; //You can set port for development environment in .env file
process.env.IP = process.env.IP || "127.0.0.0";
process.env.SESSION_KEY = process.env.SESSION_KEY || "SECURE_SESSION_KEY";
process.env.REDIS_PORT = process.env.REDIS_PORT || 6379;

const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  ip: process.env.IP,
  sessionKey: process.env.SESSION_KEY,
  redisPort: process.env.REDIS_PORT,
  root: path.normalize(`${__dirname}/../../..`),
  mongo: { options: { useNewUrlParser: true, useUnifiedTopology: true } },
  logDir: `${__dirname}/../logs`
};

module.exports = lodash.merge(
  config,
  require(`./${process.env.NODE_ENV}.js`) || {}
);
