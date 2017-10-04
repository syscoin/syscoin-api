'use strict';

var url = require('url');


var Blockmarket = require('./BlockmarketService');


module.exports.login = function login (req, res, next) {
  Blockmarket.login(req.swagger.params, res, next);
};

module.exports.storedata = function storedata (req, res, next) {
  Blockmarket.storedata(req.swagger.params, res, next);
};
