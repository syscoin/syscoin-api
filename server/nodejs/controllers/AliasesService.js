var syscoinClient = require('../index').syscoinClient;
var varUtils = require('./util/varUtils');

exports.aliasaffiliates = function(args, res, next) {
  /**
   * parameters expected in the args:
   **/
  var argList = [];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
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
  var argList = ["alias", "password"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
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

  var argList = ["regexp", "from", "safesearch"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
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
  var argList = ["aliasname"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
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
  var argList = ["aliasname"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
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
  **/

  var argList = [];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Alias list:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, argList, cb);
  syscoinClient.aliasList.apply(syscoinClient, arr);
}

exports.aliasnew = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (AliasNewRequest)
  **/
  var argList = ["aliaspeg", "aliasname", "publicvalue", "privatevalue", "password", "safesearch", "accepttransfers", "expire", "nrequired", "aliases"];

  //correct type issues
  if(args.request.value.nrequired != undefined)
    args.request.value.nrequired = args.request.value.nrequired.toString(); //number to string

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
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
  var argList = ["aliaspeg", "aliasname", "publicvalue", "privatevalue", "safesearch", "toalias_pubkey", "password", "accepttransfers", "expire", "nrequired", "aliases"];

  //correct type issues
  if(varUtils.notNullOrUndefined(args.request.value.nrequired))
    args.request.value.nrequired = args.request.value.nrequired.toString(); //number to string

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Alias update:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.aliasUpdate.apply(syscoinClient, arr);
}

