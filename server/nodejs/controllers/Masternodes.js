'use strict';

var url = require('url');


var MasterNode = require('./MasternodesService');


module.exports.sentinelping = function sentinelping (req, res, next) {
    MasterNode.sentinelping(req.swagger.params, res, next);
};

module.exports.voteraw = function voteraw (req, res, next) {
    MasterNode.voteraw(req.swagger.params, res, next);
};

module.exports.privatesend = function privatesend (req, res, next) {
    MasterNode.privatesend(req.swagger.params, res, next);
};
