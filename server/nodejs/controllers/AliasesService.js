var syscoinClient = require('../index').syscoinClient;
var varUtils = require('./util/varUtils');
var commonUtils = require('./util/commonUtils');
var methodGenerator = require('./util/methodGenerator');

/* Changed */
exports.aliasbalance = function(args, res, next) {
  var argList = [
    { prop: "alias" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Alias balance:', result, "aliasbalance");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.aliasBalance.apply(syscoinClient, arr);
}

exports.aliasinfo = function(args, res, next) {
  var argList = [
    { prop: "aliasname" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Alias info:', result, "aliasinfo");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.aliasInfo.apply(syscoinClient, arr);
}

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
 
exports.syscointxfund = function(args, res, next) {
  var argList = [
    { prop: 'hexstring' },
    { prop: 'addresses' }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Syscoin TX fund:', result, "syscointxfund");
    res.end(JSON.stringify(result));
  };
 // Convert the Addresses array to string
if(args && args.request && args.request.value && args.request.value['addresses']) {
  var actualAddresses = args.request.value['addresses']
  var addressObjectForCore = { addresses: actualAddresses };
  args.request.value['addresses'] = addressObjectForCore
} else {
  console.error("ERROR: No value defined in request for 'addresses', this is a required param");
}
  
  var arr = varUtils.getArgsArr(argList, args, "POST", cb); 
  syscoinClient.syscoinTxFund.apply(syscoinClient, arr);
}

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