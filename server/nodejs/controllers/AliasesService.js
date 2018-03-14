var syscoinClient = require('../index').syscoinClient;
var varUtils = require('./util/varUtils');
var commonUtils = require('./util/commonUtils');

/* Changed */
exports.aliasbalance = function(args, res, next) {
  var argList = [
    { prop: "alias" },
    // { prop: "minconf", defaultValue: 1 }
  ];

  // args.minconf.value = varUtils.correctTypes(args.minconf.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);
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


/* Changed */
exports.aliasnew = function(args, res, next) {
  var argList = [
    // { prop: "aliaspeg" },
    // { prop: "password"},
    // { prop: "safesearch", defaultValue: "Yes" },
    // { prop: "nrequired", defaultValue: 0 },
    // { prop: "aliases", defaultValue: "[]" }
    { prop: "aliasname" },
    { prop: "publicvalue" },
    { prop: "accept_transfers_flags", defaultValue: 3 },
    { prop: "expire_timestamp", defaultValue: 3600 },
    { prop: "address"},
    { prop: "encryption_privatekey"},
    { prop: "encryption_publickey"},
    { prop: "witness"},
  ];

  // args.request.value.nrequired = varUtils.correctTypes(args.request.value.nrequired, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

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

/* Changed */
exports.aliaspay = function(args, res, next) {
  var argList = [
    // { prop: "alias" },
    // { prop: "minconf", defaultValue: 0 },
    // { prop: "comment", defaultValue: "" }
    { prop: "aliasfrom" },
    { prop: "amounts" },
    { prop: "instantsend" },
    { prop: "subtractfeefromamount" },
  ];

  // args.request.value.nrequired = varUtils.correctTypes(args.request.value.nrequired, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

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

/* Changed */
exports.aliasupdate = function(args, res, next) {
  //TODO: update core RPC docs on param ordering- order of this array MATTERS!!!!
  var argList = [
    { prop: "aliasname" },
    { prop: "publicvalue" },
    { prop: "accept_transfers_flags", defaultValue: 3 },
    { prop: "expire_timestamp", defaultValue: 3600 },
    { prop: "address"},
    { prop: "encryption_privatekey"},
    { prop: "encryption_publickey"},
    { prop: "witness"},
  ];

  args.request.value.nrequired = varUtils.correctTypes(args.request.value.nrequired, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

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
