'use strict';

var url = require('url');
var Aliases = require('./AssetService');

module.exports.assetinfo = function assetinfo (req, res, next) {
    Aliases.assetinfo(req.swagger.params, res, next);
  };
  
  module.exports.assetsend = function assetsend (req, res, next) {
    Aliases.assetsend(req.swagger.params, res, next);
  };
  
  module.exports.assetnew = function assetnew (req, res, next) {
    Aliases.assetnew(req.swagger.params, res, next);
  };
  
  module.exports.assetallocationinfo = function assetallocationinfo (req, res, next) {
    Aliases.assetallocationinfo(req.swagger.params, res, next);
  };
  
  module.exports.assetallocationsend = function assetallocationsend (req, res, next) {
    Aliases.assetallocationsend(req.swagger.params, res, next);
  };
  
  module.exports.assetallocationsenderstatus = function assetallocationsenderstatus (req, res, next) {
    Aliases.assetallocationsenderstatus(req.swagger.params, res, next);
  };
  
  module.exports.assettransfer = function assettransfer (req, res, next) {
    Aliases.assettransfer(req.swagger.params, res, next);
  };
  
  module.exports.assetupdate = function assetupdate (req, res, next) {
    Aliases.assetupdate(req.swagger.params, res, next);
  };

  //missing assetallocationcollectinterest