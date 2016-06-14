'use strict';

var url = require('url');


var Offers = require('./OffersService');


module.exports.offeraccept = function offeraccept (req, res, next) {
  Offers.offeraccept(req.swagger.params, res, next);
};

module.exports.offeracceptlist = function offeracceptlist (req, res, next) {
  Offers.offeracceptlist(req.swagger.params, res, next);
};

module.exports.offeraddwhitelist = function offeraddwhitelist (req, res, next) {
  Offers.offeraddwhitelist(req.swagger.params, res, next);
};

module.exports.offerclearwhitelist = function offerclearwhitelist (req, res, next) {
  Offers.offerclearwhitelist(req.swagger.params, res, next);
};

module.exports.offerfilter = function offerfilter (req, res, next) {
  Offers.offerfilter(req.swagger.params, res, next);
};

module.exports.offerhistory = function offerhistory (req, res, next) {
  Offers.offerhistory(req.swagger.params, res, next);
};

module.exports.offerinfo = function offerinfo (req, res, next) {
  Offers.offerinfo(req.swagger.params, res, next);
};

module.exports.offerlink = function offerlink (req, res, next) {
  Offers.offerlink(req.swagger.params, res, next);
};

module.exports.offerlist = function offerlist (req, res, next) {
  Offers.offerlist(req.swagger.params, res, next);
};

module.exports.offernew = function offernew (req, res, next) {
  Offers.offernew(req.swagger.params, res, next);
};

module.exports.offerremovewhitelist = function offerremovewhitelist (req, res, next) {
  Offers.offerremovewhitelist(req.swagger.params, res, next);
};

module.exports.offerscan = function offerscan (req, res, next) {
  Offers.offerscan(req.swagger.params, res, next);
};

module.exports.offerupdate = function offerupdate (req, res, next) {
  Offers.offerupdate(req.swagger.params, res, next);
};

module.exports.offerwhitelist = function offerwhitelist (req, res, next) {
  Offers.offerwhitelist(req.swagger.params, res, next);
};
