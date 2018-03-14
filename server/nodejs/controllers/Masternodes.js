'use strict';

var url = require('url');


var MasterNode = require('./MasternodesService');


module.exports.sentinelping = function addmultisigaddress (req, res, next) {
    MasterNode.sentinelping(req.swagger.params, res, next);
};

module.exports.voteraw = function addmultisigaddress (req, res, next) {
    MasterNode.voteraw(req.swagger.params, res, next);
};
