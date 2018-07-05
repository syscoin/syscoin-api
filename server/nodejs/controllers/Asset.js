'use strict';

var Assets = require('./AssetService');

module.exports.assetinfo = function assetinfo (req, res, next) {
  Assets.assetinfo(req.swagger.params, res, next);
};
  
module.exports.assetsend = function assetsend (req, res, next) {
  Assets.assetsend(req.swagger.params, res, next);
};
  
module.exports.assetnew = function assetnew (req, res, next) {
  Assets.assetnew(req.swagger.params, res, next);
};
  
module.exports.assetallocationinfo = function assetallocationinfo (req, res, next) {
  Assets.assetallocationinfo(req.swagger.params, res, next);
};
  
module.exports.assetallocationsend = function assetallocationsend (req, res, next) {
  Assets.assetallocationsend(req.swagger.params, res, next);
};
  
module.exports.assetallocationsenderstatus = function assetallocationsenderstatus (req, res, next) {
  Assets.assetallocationsenderstatus(req.swagger.params, res, next);
};
  
module.exports.assettransfer = function assettransfer (req, res, next) {
  Assets.assettransfer(req.swagger.params, res, next);
};
  
module.exports.assetupdate = function assetupdate (req, res, next) {
  Assets.assetupdate(req.swagger.params, res, next);
};

module.exports.assetallocationcollectinterest = function assetallocationcollectinterest (req, res, next) {
  Assets.assetallocationcollectinterest(req.swagger.params, res, next);
};
  