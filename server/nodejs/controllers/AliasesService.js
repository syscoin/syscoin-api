var syscoinClient = require('../index').syscoinClient;
var varUtils = require('./util/varUtils');
var commonUtils = require('./util/commonUtils');

exports.aliasaffiliates = function(args, res, next) {
  /**
   * parameters expected in the args:
   **/
  var argList = [];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Alias affiliates:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.aliasAffiliates.apply(syscoinClient, arr);
}

exports.aliasauthenticate = function(args, res, next) {
  /**
   * parameters expected in the args:
   * alias (String)
   * password (String)
   **/
  var argList = [
    { prop: "alias" },
    { prop: "password" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Alias authenticate:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.aliasAuthenticate.apply(syscoinClient, arr);
}

exports.aliasfilter = function(args, res, next) {
  /**
   * parameters expected in the args:
  * regexp (String)
  * from (String)
  * safesearch (String)
  **/

  var argList = [
    { propr: "regexp", defaultValue: "" },
    { prop:"from", defaultValue: 0 },
    { prop: "safesearch", defaultValue: "Yes" }
  ];
  
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Alias filter:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.aliasFilter.apply(syscoinClient, arr);
}

exports.aliashistory = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aliasname (String)
  **/
  var argList = [
    { prop: "aliasname" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Alias history:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.aliasHistory.apply(syscoinClient, arr);
}

exports.aliasinfo = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aliasname (String)
  **/
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

exports.aliaslist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aliasname (String)
   * TODO: add private key to spec
  **/

  var argList = [
    { prop: "aliasname" },
    { prop: "privatekey" }
  ];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Alias list:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.aliasList.apply(syscoinClient, arr);
}

exports.aliasnew = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (AliasNewRequest)
  **/
  var argList = [
    { prop: "aliaspeg" },
    { prop: "aliasname" },
    { prop: "password"},
    { prop: "publicvalue" },
    { prop: "privatevalue", defaultValue: "" },
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

exports.aliasupdate = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (AliasUpdateRequest)
  **/

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

