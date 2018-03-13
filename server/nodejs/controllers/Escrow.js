'use strict';

var url = require('url');


var Escrow = require('./EscrowService');


module.exports.escrowacknowledge = function escrowacknowledge (req, res, next) {
  Escrow.escrowacknowledge(req.swagger.params, res, next);
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

module.exports.escrowlist = function escrowlist (req, res, next) {
  Escrow.escrowlist(req.swagger.params, res, next);
};

module.exports.escrownew = function escrownew (req, res, next) {
  Escrow.escrownew(req.swagger.params, res, next);
};

module.exports.escrowrefund = function escrowrefund (req, res, next) {
  Escrow.escrowrefund(req.swagger.params, res, next);
};

module.exports.escrowrelease = function escrowrelease (req, res, next) {
  Escrow.escrowrelease(req.swagger.params, res, next);
};
