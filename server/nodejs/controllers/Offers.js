'use strict';


var Offers = require('./OffersService');

module.exports.offerinfo = function offerinfo (req, res, next) {
  Offers.offerinfo(req.swagger.params, res, next);
};

module.exports.offerlink = function offerlink (req, res, next) {
  Offers.offerlink(req.swagger.params, res, next);
};

module.exports.offernew = function offernew (req, res, next) {
  Offers.offernew(req.swagger.params, res, next);
};

module.exports.offerupdate = function offerupdate (req, res, next) {
  Offers.offerupdate(req.swagger.params, res, next);
};
