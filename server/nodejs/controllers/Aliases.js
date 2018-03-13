'use strict';

var url = require('url');


var Aliases = require('./AliasesService');

module.exports.aliasauthenticate = function aliasauthenticate (req, res, next) {
  Aliases.aliasauthenticate(req.swagger.params, res, next);
};

module.exports.aliasbalance = function aliasbalance (req, res, next) {
  Aliases.aliasbalance(req.swagger.params, res, next);
};

module.exports.aliascount = function aliascount (req, res, next) {
  Aliases.aliascount(req.swagger.params, res, next);
};

module.exports.aliasfilter = function aliasfilter (req, res, next) {
  Aliases.aliasfilter(req.swagger.params, res, next);
};

module.exports.aliashistory = function aliashistory (req, res, next) {
  Aliases.aliashistory(req.swagger.params, res, next);
};

module.exports.aliasinfo = function aliasinfo (req, res, next) {
  Aliases.aliasinfo(req.swagger.params, res, next);
};

module.exports.aliaslist = function aliaslist (req, res, next) {
  Aliases.aliaslist(req.swagger.params, res, next);
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
