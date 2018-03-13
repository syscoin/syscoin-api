'use strict';

var url = require('url');


var Offers = require('./OffersService');

/* Deprecated */
module.exports.offeraccept = function offeraccept (req, res, next) {
  Offers.offeraccept(req.swagger.params, res, next);
};

/* Deprecated */
module.exports.offeracceptacknowledge = function offeracceptacknowledge (req, res, next) {
  Offers.offeracceptacknowledge(req.swagger.params, res, next);
};

/* Deprecated */
module.exports.offeracceptcount = function offeracceptcount (req, res, next) {
  Offers.offeracceptcount(req.swagger.params, res, next);
};

/* Deprecated */
module.exports.offeracceptfeedback = function offeracceptfeedback (req, res, next) {
  Offers.offeracceptfeedback(req.swagger.params, res, next);
};

/* Deprecated */
module.exports.offeracceptlist = function offeracceptlist (req, res, next) {
  Offers.offeracceptlist(req.swagger.params, res, next);
};

/* Deprecated */
module.exports.offeraddwhitelist = function offeraddwhitelist (req, res, next) {
  Offers.offeraddwhitelist(req.swagger.params, res, next);
};

/* Deprecated */
module.exports.offerclearwhitelist = function offerclearwhitelist (req, res, next) {
  Offers.offerclearwhitelist(req.swagger.params, res, next);
};

/* Deprecated */
module.exports.offercount = function offercount (req, res, next) {
  Offers.offercount(req.swagger.params, res, next);
};

/* Deprecated */
module.exports.offerfilter = function offerfilter (req, res, next) {
  Offers.offerfilter(req.swagger.params, res, next);
};

/* Deprecated */
module.exports.offerhistory = function offerhistory (req, res, next) {
  Offers.offerhistory(req.swagger.params, res, next);
};

module.exports.offerinfo = function offerinfo (req, res, next) {
  Offers.offerinfo(req.swagger.params, res, next);
};

module.exports.offerlink = function offerlink (req, res, next) {
  Offers.offerlink(req.swagger.params, res, next);
};

/* Deprecated */
module.exports.offerlist = function offerlist (req, res, next) {
  Offers.offerlist(req.swagger.params, res, next);
};

module.exports.offernew = function offernew (req, res, next) {
  Offers.offernew(req.swagger.params, res, next);
};

/* Deprecated */
module.exports.offerremovewhitelist = function offerremovewhitelist (req, res, next) {
  Offers.offerremovewhitelist(req.swagger.params, res, next);
};

module.exports.offerupdate = function offerupdate (req, res, next) {
  Offers.offerupdate(req.swagger.params, res, next);
};

module.exports.offerwhitelist = function offerwhitelist (req, res, next) {
  Offers.offerwhitelist(req.swagger.params, res, next);
};
