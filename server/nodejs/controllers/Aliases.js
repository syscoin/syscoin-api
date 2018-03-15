'use strict';

var url = require('url');


var Aliases = require('./AliasesService');

module.exports.aliasbalance = function aliasbalance (req, res, next) {
  Aliases.aliasbalance(req.swagger.params, res, next);
};

module.exports.aliasinfo = function aliasinfo (req, res, next) {
  Aliases.aliasinfo(req.swagger.params, res, next);
};

module.exports.aliasnew = function aliasnew (req, res, next) {
  Aliases.aliasnew(req.swagger.params, res, next);
};

module.exports.aliaspay = function aliaspay (req, res, next) {
  Aliases.aliaspay(req.swagger.params, res, next);
};

module.exports.aliasupdate = function aliasupdate (req, res, next) {
  Aliases.aliasupdate(req.swagger.params, res, next);
};

module.exports.aliaswhitelist = function aliaswhitelist (req, res, next) {
  console.log('wassup q')
  Aliases.aliaswhitelist(req.swagger.params, res, next);
};

module.exports.assetinfo = function assetinfo (req, res, next) {
  Aliases.assetinfo(req.swagger.params, res, next);
};

module.exports.assetsend = function assetsend (req, res, next) {
  Aliases.assetsend(req.swagger.params, res, next);
};