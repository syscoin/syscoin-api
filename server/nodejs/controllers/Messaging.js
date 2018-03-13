'use strict';

var url = require('url');


var Messaging = require('./MessagingService');

/* Deprecated */
module.exports.messageinfo = function messageinfo (req, res, next) {
  Messaging.messageinfo(req.swagger.params, res, next);
};

/* Deprecated */
module.exports.messagenew = function messagenew (req, res, next) {
  Messaging.messagenew(req.swagger.params, res, next);
};

/* Deprecated */
module.exports.messagereceivecount = function messagereceivecount (req, res, next) {
  Messaging.messagereceivecount(req.swagger.params, res, next);
};

/* Deprecated */
module.exports.messagereceivelist = function messagereceivelist (req, res, next) {
  Messaging.messagereceivelist(req.swagger.params, res, next);
};

/* Deprecated */
module.exports.messagesentcount = function messagesentcount (req, res, next) {
  Messaging.messagesentcount(req.swagger.params, res, next);
};

/* Deprecated */
module.exports.messagesentlist = function messagesentlist (req, res, next) {
  Messaging.messagesentlist(req.swagger.params, res, next);
};
