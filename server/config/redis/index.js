"use strict";

var redis = require("redis");
var config = require("../environment");
var logger = require("../../utils/winston.helper");

var redisClient = redis.createClient(config.redisPort || 6379);

redisClient
  .on("ready", function() {
    logger.info("Redis server ready.");
  })
  .on("error", function(error) {
    logger.error(error);
  })
  .on("end", function() {
    logger.info("Redis server disconnect.");
  });

module.exports = redisClient;
