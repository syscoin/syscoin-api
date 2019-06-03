'use strict';

var Spark = require('./SparkService');

module.exports.login = function login (req, res, next) {
  Spark.login(req.swagger.params, res, next);
};

