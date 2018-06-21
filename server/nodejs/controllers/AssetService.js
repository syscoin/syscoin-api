var syscoinClient = require('../index').syscoinClient;
var varUtils = require('./util/varUtils');
var commonUtils = require('./util/commonUtils');
var methodGenerator = require('./util/methodGenerator');

//assets

exports.assetallocationcollectinterest = methodGenerator.generateGenericSyscoinMethod([
  { prop: 'asset' },
  { prop: 'alias' },
  { prop: 'witness' }
], syscoinClient.assetAllocationCollectInterest, 'assetallocationcollectinterest', 'POST');

exports.assetinfo = methodGenerator.generateGenericSyscoinMethod([
  { prop: "asset" },
  { prop: "getinputs", defaultValue: true }
], syscoinClient.assetInfo, 'assetinfo', 'GET');

exports.assetsend = methodGenerator.generateGenericSyscoinMethod([
  { prop: "asset" },
  { prop: "aliasfrom" },
  { prop: "amounts" },
  { prop: "memo" },
  { prop: "witness" }
], syscoinClient.assetSend, 'assetsend', 'POST');

exports.assetallocationinfo = methodGenerator.generateGenericSyscoinMethod([
  { prop: "asset" },
  { prop: "alias" },
  { prop: "getinputs", defaultValue: true }
], syscoinClient.assetAllocationInfo, 'assetallocationinfo', 'GET');

exports.assetallocationsend = methodGenerator.generateGenericSyscoinMethod([
  { prop: "asset" },
  { prop: "aliasfrom" },
  { prop: "amounts" },
  { prop: "memo" },
  { prop: "witness" }
], syscoinClient.assetAllocationSend, 'assetallocationsend', 'POST');

exports.assetallocationsenderstatus = function (args, res, next) {
  var argList = [
    { prop: "asset" },
    { prop: "sender" },
    { prop: "txid" }
  ];

  var cb = function (err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('asset allocation sender status', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.assetAllocationSenderStatus.apply(syscoinClient, arr);
}

exports.assettransfer = function (args, res, next) {
  var argList = [
    { prop: "asset" },
    { prop: "alias" },
    { prop: "certkey" },
    { prop: "witness" }
  ];

  var cb = function (err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('asset transfer', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.assetTransfer.apply(syscoinClient, arr);
}

exports.assetupdate = function (args, res, next) {
  var argList = [
    { prop: "asset", },
    { prop: "publicvalue", },
    { prop: "category", },
    { prop: "supply", },
    { prop: "interest_rate", },
    { prop: "witness", }

  ];

  args.request.value.supply = varUtils.correctTypes(args.request.value.supply, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

  var cb = function (err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('asset update', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.assetUpdate.apply(syscoinClient, arr);
}

exports.assetnew = function (args, res, next) {
  var argList = [
    { prop: "symbol", },
    { prop: "alias", },
    { prop: "publicvalue", },
    { prop: "category", },
    { prop: "precision", },
    { prop: "use_inputranges", },
    { prop: "supply", },
    { prop: "max_supply", },
    { prop: "interest_rate", },
    { prop: "can_adjust_interest_rate", },
    { prop: "witness", }
  ];


  args.request.value.max_supply = varUtils.correctTypes(args.request.value.max_supply, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

  var cb = function (err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('asset update', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.assetNew.apply(syscoinClient, arr);
}