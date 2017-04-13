'use strict';

var url = require('url');


var Escrow = require('./EscrowService');


module.exports.escrowacknowledge = function escrowacknowledge (req, res, next) {
  Escrow.escrowacknowledge(req.swagger.params, res, next);
};

module.exports.escrowclaimrefund = function escrowclaimrefund (req, res, next) {
  Escrow.escrowclaimrefund(req.swagger.params, res, next);
};

module.exports.escrowclaimrelease = function escrowclaimrelease (req, res, next) {
  Escrow.escrowclaimrelease(req.swagger.params, res, next);
};

module.exports.escrowcompleterefund = function escrowcompleterefund (req, res, next) {
  Escrow.escrowcompleterefund(req.swagger.params, res, next);
};

module.exports.escrowcompleterelease = function escrowcompleterelease (req, res, next) {
  Escrow.escrowcompleterelease(req.swagger.params, res, next);
};

module.exports.escrowfeedback = function escrowfeedback (req, res, next) {
  Escrow.escrowfeedback(req.swagger.params, res, next);
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

module.exports.aliaspay = function escrownew (req, res, next) {
  Escrow.aliaspay(req.swagger.params, res, next);
};

module.exports.escrowrefund = function escrowrefund (req, res, next) {
  Escrow.escrowrefund(req.swagger.params, res, next);
};

module.exports.escrowrelease = function escrowrelease (req, res, next) {
  Escrow.escrowrelease(req.swagger.params, res, next);
};

module.exports.generateescrowmultisig = function generateescrowmultisig (req, res, next) {
  Escrow.generateescrowmultisig(req.swagger.params, res, next);
};
