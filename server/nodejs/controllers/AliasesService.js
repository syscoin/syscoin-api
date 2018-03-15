var syscoinClient = require('../index').syscoinClient;
var varUtils = require('./util/varUtils');
var commonUtils = require('./util/commonUtils');

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
    { prop: "aliaspeg" },
    { prop: "aliasname" },
    { prop: "password"},
    { prop: "publicvalue" },
    { prop: "safesearch", defaultValue: "Yes" },
    { prop: "accepttransfers", defaultValue: "Yes" },
    { prop: "expire", defaultValue: 0 },
    { prop: "nrequired", defaultValue: 0 },
    { prop: "aliases", defaultValue: "[]" }
  ];

  args.request.value.nrequired = varUtils.correctTypes(args.request.value.nrequired, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

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
    { prop: "alias" },
    { prop: "amounts" },
    { prop: "minconf", defaultValue: 0 },
    { prop: "comment", defaultValue: "" }
  ];

  args.request.value.nrequired = varUtils.correctTypes(args.request.value.nrequired, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

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
    { prop: "aliaspeg" },
    { prop: "aliasname" },
    { prop: "publicvalue" },
    { prop: "privatevalue", defaultValue: "" },
    { prop: "safesearch", defaultValue: "Yes" },
    { prop: "toalias_pubkey", defaultValue: "" },
    { prop: "password", defaultValue: "" },
    { prop: "accepttransfers", defaultValue: "Yes" },
    { prop: "expire", defaultValue: 0 },
    { prop: "nrequired", defaultValue: 0 },
    { prop: "aliases", defaultValue: [] }
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

exports.aliaswhitelist = function(args, res, next) {
  console.log('yo q123')
  var argList = [
    { prop: "alias" }
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
  syscoinClient.aliasWhitelist.apply(syscoinClient, arr);
}
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
  syscoinClient.assetSend.apply(syscoinClient, arr);
}