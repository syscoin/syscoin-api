'use strict';

var url = require('url');


var Escrow = require('./EscrowService');


module.exports.escrowclaimrefund = function escrowclaimrefund (req, res, next) {
  Escrow.escrowclaimrefund(req.swagger.params, res, next);
};

module.exports.escrowclaimrelease = function escrowclaimrelease (req, res, next) {
  Escrow.escrowclaimrelease(req.swagger.params, res, next);
};

module.exports.escrowcomplete = function escrowcomplete (req, res, next) {
  Escrow.escrowcomplete(req.swagger.params, res, next);
};

module.exports.escrowfilter = function escrowfilter (req, res, next) {
  Escrow.escrowfilter(req.swagger.params, res, next);
};

module.exports.escrowhistory = function escrowhistory (req, res, next) {
  Escrow.escrowhistory(req.swagger.params, res, next);
};

module.exports.escrowinfo = function escrowinfo (req, res, next) {
  Escrow.escrowinfo(req.swagger.params, res, next);
};

module.exports.escrowlist = function escrowlist (req, res, next) {
  Escrow.escrowlist(req.swagger.params, res, next);
};

module.exports.escrownew = function escrownew (req, res, next) {
  Escrow.escrownew(req.swagger.params, res, next);
};

module.exports.escrowscan = function escrowscan (req, res, next) {
  Escrow.escrowscan(req.swagger.params, res, next);
};
