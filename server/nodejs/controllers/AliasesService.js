var syscoinClient = require('../index').syscoinClient;
var varUtils = require('./util/varUtils');
var commonUtils = require('./util/commonUtils');
var methodGenerator = require('./util/methodGenerator');

exports.aliasbalance = methodGenerator.generateGenericSyscoinMethod([
  { prop: "alias" }
], syscoinClient.aliasBalance, 'aliasbalance', 'GET');

exports.aliasinfo = methodGenerator.generateGenericSyscoinMethod([
  { prop: "aliasname" }
], syscoinClient.aliasInfo, 'aliasinfo', 'GET');

exports.aliasnew = function(args, res, next) {
  var argList = [
    { prop: "aliasname" },
    { prop: "publicvalue" },
    { prop: "accept_transfers_flags", defaultValue: 3 },
    { prop: "expire_timestamp", defaultValue: 3600 },
    { prop: "address"},
    { prop: "encryption_privatekey"},
    { prop: "encryption_publickey"},
    { prop: "witness"}
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Alias new:', result, "aliasnew");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.aliasNew.apply(syscoinClient, arr);
}

exports.aliaspay = function(args, res, next) {
  var argList = [
    { prop: "aliasfrom" },
    { prop: "amounts" },
    { prop: "instantsend"},
    { prop: "subtractfeefromamount"}
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Alias pay:', result, "aliaspay");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.aliasPay.apply(syscoinClient, arr);
}

exports.aliasupdate = function(args, res, next) {
  //TODO: update core RPC docs on param ordering- order of this array MATTERS!!!!
  var argList = [
    { prop: "aliasname" },
    { prop: "publicvalue" },
    { prop: "address"},
    { prop: "accept_transfers_flags", defaultValue: 3 },
    { prop: "expire_timestamp", defaultValue: 3600 },
    { prop: "encryption_privatekey"},
    { prop: "encryption_publickey"},
    { prop: "witness"}
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Alias update:', result, "aliasupdate");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.aliasUpdate.apply(syscoinClient, arr);
}

exports.aliaswhitelist = function(args, res, next) {
  var argList = [
    { prop: "aliasname" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Alias whitelist:', result, "aliaswhitelist");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  console.log(arr)
  syscoinClient.aliasWhitelist.apply(syscoinClient, arr);
}

exports.aliasclearwhitelist = function(args, res, next) {
  console.log('yo q im in alias clear whitelist')
  var argList = [
    { prop: "owneralias", },
    { prop: "witness", }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Alias clear whitelist:', result, "aliasclearwhitelist");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.aliasClearWhitelist.apply(syscoinClient, arr);
}

exports.aliasupdatewhitelist = function(args, res, next) {
  var argList = [
    { prop: "owneralias" },
    { prop: "entries" },
    { prop: "witness", defaultValue: "" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Alias update whitelist:', result, "aliasupdatewhitelist");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.aliasUpdateWhitelist.apply(syscoinClient, arr);
}

 exports.syscointxfund = methodGenerator.generateGenericSyscoinMethod([
   { prop: 'hexstring' },
   { prop: 'addresses' }
 ], syscoinClient.syscoinTxFund, 'syscointxfund', 'POST');


exports.aliasaddscript = function(args, res, next) {
  var argList = [
    { prop: "script" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Alias add script:', result, "aliasaddscript");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.aliasAddScript.apply(syscoinClient, arr);
}