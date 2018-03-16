var syscoinClient = require('../index').syscoinClient;
var varUtils = require('./util/varUtils');
var commonUtils = require('./util/commonUtils');

//assets
exports.assetinfo = function(args, res, next) {
    var argList = [
      { prop: "asset", },
      { prop: "getinputs", defaultValue: true }
    ];
  
    var cb = function(err, result, resHeaders) {
      res.setHeader('Content-Type', 'application/json');
  
      if (err) {
        return commonUtils.reportError(res, err);
      }
  
      console.log('asset allocation sender status', result);
      res.end(JSON.stringify(result));
    };
  
    var arr = varUtils.getArgsArr(argList, args, "GET", cb);
    console.log('this is what u want q')
    console.log(arr)
    syscoinClient.assetInfo.apply(syscoinClient, arr);
  }
  
  exports.assetsend = function(args, res, next) {
    var argList = [
      { prop: "asset" },
      { prop: "aliasfrom" },
      { prop: "amounts" },
      { prop: "memo" },
      { prop: "witness" }
    ];
  
    var cb = function(err, result, resHeaders) {
      res.setHeader('Content-Type', 'application/json');
  
      if (err) {
        return commonUtils.reportError(res, err);
      }
  
      console.log('asset allocation sender status', result);
      res.end(JSON.stringify(result));
    };
  
    var arr = varUtils.getArgsArr(argList, args, "POST", cb);
    console.log('qarr ==>:')
    console.log(arr)
    syscoinClient.assetSend.apply(syscoinClient, arr);
  }
  
  exports.assetallocationinfo = function(args, res, next) {
    var argList = [
      { prop: "asset" },
      { prop: "alias" },
      { prop: "getinputs", defaultValue: true }
    ];
  
    var cb = function(err, result, resHeaders) {
      res.setHeader('Content-Type', 'application/json');
  
      if (err) {
        return commonUtils.reportError(res, err);
      }
  
      console.log('asset allocation info', result);
      res.end(JSON.stringify(result));
    };
  
    var arr = varUtils.getArgsArr(argList, args, "GET", cb);
    syscoinClient.assetAllocationInfo.apply(syscoinClient, arr);
  }
  
  exports.assetallocationsend = function(args, res, next) {
    var argList = [
      { prop: "asset" },
      { prop: "aliasfrom" },
      { prop: "amounts" },
      { prop: "memo" },
      { prop: "witness" }
    ];
  
    var cb = function(err, result, resHeaders) {
      res.setHeader('Content-Type', 'application/json');
  
      if (err) {
        return commonUtils.reportError(res, err);
      }
  
      console.log('asset allocation send', result);
      res.end(JSON.stringify(result));
    };
  
    var arr = varUtils.getArgsArr(argList, args, "POST", cb);
    syscoinClient.assetAllocationSend.apply(syscoinClient, arr);
  }
  
  exports.assetallocationsenderstatus = function(args, res, next) {
    var argList = [
      { prop: "asset" },
      { prop: "sender" },
      { prop: "txid" }
    ];
  
    var cb = function(err, result, resHeaders) {
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
  
  exports.assettransfer = function(args, res, next) {
    var argList = [
      { prop: "asset" },
      { prop: "alias" },
      { prop: "certkey" },
      { prop: "witness" }
    ];
  
    var cb = function(err, result, resHeaders) {
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
  
  exports.assetupdate = function(args, res, next) {
    var argList = [
      { prop: "asset", },
      { prop: "public", },
      { prop: "category", },
      { prop: "supply", },
      { prop: "interest_rate", },
      { prop: "witness", }

    ];
  
    var cb = function(err, result, resHeaders) {
      res.setHeader('Content-Type', 'application/json');
  
      if (err) {
        return commonUtils.reportError(res, err);
      }
  
      console.log('asset update', result);
      res.end(JSON.stringify(result));
    };
  
    var arr = varUtils.getArgsArr(argList, args, "POST", cb);
    //console.log('manually printing value ====>: ');
    //console.log(args.request.value.public)
    //var arr = [{"_id":'qcoin', "public": 'somepublicinfo',"category": 'assets', "supply": 5000, "interest_rate": 0, "witness": "" },cb];
    console.log('arrr ====>: ');
    console.log(arr)
    syscoinClient.assetUpdate.apply(syscoinClient, arr);
  }
  
  exports.assetnew = function(args, res, next) {
    var argList = [
      { prop: "name", },
      { prop: "alias", },
      { prop: "public", },
      { prop: "category", },
      { prop: "supply", },
      { prop: "max_supply", },
      { prop: "use_inputranges", },
      { prop: "interest_rate", },
      { prop: "can_adjust_interest_rate", },
      { prop: "witness", }

    ];
  
    var cb = function(err, result, resHeaders) {
      res.setHeader('Content-Type', 'application/json');
  
      if (err) {
        return commonUtils.reportError(res, err);
      }
  
      console.log('asset update', result);
      res.end(JSON.stringify(result));
    };
  
    var arr = varUtils.getArgsArr(argList, args, "POST", cb);
    //console.log('manually printing value ====>: ');
    //console.log(args.request.value.public)
    //var arr = [{"_id":'qcoin', "public": 'somepublicinfo',"category": 'assets', "supply": 5000, "interest_rate": 0, "witness": "" },cb];
    console.log('arrr ====>: ');
    console.log(arr)
    syscoinClient.assetNew.apply(syscoinClient, arr);
  }