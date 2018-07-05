'use strict';

var Blockmarket = require('./BlockmarketService');

module.exports.login = function login (req, res, next) {
  Blockmarket.login(req.swagger.params, res, next);
};

