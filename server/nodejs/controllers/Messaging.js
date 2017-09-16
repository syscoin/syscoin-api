'use strict';

var url = require('url');


var Messaging = require('./MessagingService');


module.exports.messageinfo = function messageinfo (req, res, next) {
  Messaging.messageinfo(req.swagger.params, res, next);
};

module.exports.messagenew = function messagenew (req, res, next) {
  Messaging.messagenew(req.swagger.params, res, next);
};

module.exports.messagereceivecount = function messagereceivecount (req, res, next) {
  Messaging.messagereceivecount(req.swagger.params, res, next);
};

module.exports.messagereceivelist = function messagereceivelist (req, res, next) {
  Messaging.messagereceivelist(req.swagger.params, res, next);
};

module.exports.messagesentcount = function messagesentcount (req, res, next) {
  Messaging.messagesentcount(req.swagger.params, res, next);
};

module.exports.messagesentlist = function messagesentlist (req, res, next) {
  Messaging.messagesentlist(req.swagger.params, res, next);
};
