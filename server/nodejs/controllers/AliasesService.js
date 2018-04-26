var syscoinClient = require('../index').syscoinClient;
var varUtils = require('./util/varUtils');
var commonUtils = require('./util/commonUtils');

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

    console.log('Alias balance:', result);
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

    console.log('Alias info:', result);
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

    console.log('Alias new:', result);
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

    console.log('Alias pay:', result);
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

    console.log('Alias update:', result);
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

    console.log('Alias whitelist:', result);
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

    console.log('Alias clear whitelist:', result);
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

    console.log('Alias update whitelist:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.aliasUpdateWhitelist.apply(syscoinClient, arr);
}

exports.aliasnewfund = function(args, res, next) {
  var argList = [
    { prop: "hexstring" },
    { prop: "addresses" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('aliasNewFund:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.aliasNewFund.apply(syscoinClient, arr);
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

    console.log('aliasaddscript:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.aliasAddScript.apply(syscoinClient, arr);
}