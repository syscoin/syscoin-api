'use strict';

var url = require('url');


var Certificates = require('./CertificatesService');

module.exports.certcount = function certcount (req, res, next) {
  Certificates.certcount(req.swagger.params, res, next);
};

module.exports.certfilter = function certfilter (req, res, next) {
  Certificates.certfilter(req.swagger.params, res, next);
};

module.exports.certhistory = function certhistory (req, res, next) {
  Certificates.certhistory(req.swagger.params, res, next);
};

module.exports.certinfo = function certinfo (req, res, next) {
  Certificates.certinfo(req.swagger.params, res, next);
};

module.exports.certlist = function certlist (req, res, next) {
  Certificates.certlist(req.swagger.params, res, next);
};

module.exports.certnew = function certnew (req, res, next) {
  Certificates.certnew(req.swagger.params, res, next);
};

module.exports.certtransfer = function certtransfer (req, res, next) {
  Certificates.certtransfer(req.swagger.params, res, next);
};

module.exports.certupdate = function certupdate (req, res, next) {
  Certificates.certupdate(req.swagger.params, res, next);
};
