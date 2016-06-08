'use strict';

var url = require('url');


var Messaging = require('./MessagingService');


module.exports.messagehistory = function messagehistory (req, res, next) {
  Messaging.messagehistory(req.swagger.params, res, next);
};

module.exports.messageinfo = function messageinfo (req, res, next) {
  Messaging.messageinfo(req.swagger.params, res, next);
};

module.exports.messagelist = function messagelist (req, res, next) {
  Messaging.messagelist(req.swagger.params, res, next);
};

module.exports.messagenew = function messagenew (req, res, next) {
  Messaging.messagenew(req.swagger.params, res, next);
};

module.exports.messagesentlist = function messagesentlist (req, res, next) {
  Messaging.messagesentlist(req.swagger.params, res, next);
};
