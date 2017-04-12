var syscoinClient = require('../index').syscoinClient;
var varUtils = require('./util/varUtils');

exports.aliasaffiliates = function(args, res, next) {
  /**
   * parameters expected in the args:
   **/
  syscoinClient.aliasAffiliates(function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Alias affiliates:', result);
    res.end(JSON.stringify(result));
  });
}

exports.aliasauthenticate = function(args, res, next) {
  /**
   * parameters expected in the args:
   * alias (String)
   * password (String)
   **/
  syscoinClient.aliasAuthenticate(args.alias.value, args.password.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Alias authenticate:', result);
    res.end(JSON.stringify(result));
  });
}

exports.aliasfilter = function(args, res, next) {
  /**
   * parameters expected in the args:
  * regexp (String)
  * from (String)
  * safesearch (String)
  **/

  var defaultArgs = {
    from: "",
    safesearch: "Yes"
  };
  args = varUtils.setDefaultArgs(defaultArgs, args);

  syscoinClient.aliasFilter(args.regexp.value, args.from.value, args.safesearch.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Alias filter:', result);
    res.end(JSON.stringify(result));
  });
}

exports.aliashistory = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aliasname (String)
  **/
  syscoinClient.aliasHistory(args.aliasname.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Alias history:', result);
    res.end(JSON.stringify(result));
  });
}

exports.aliasinfo = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aliasname (String)
  **/
  syscoinClient.aliasInfo(args.aliasname.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Alias info:', result);
    res.end(JSON.stringify(result));
  });
}

exports.aliaslist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aliasname (String)
  **/

  var defaultArgs = {
    aliasname: ""
  };
  args = varUtils.setDefaultArgs(defaultArgs, args);

  syscoinClient.aliasList(args.aliasname.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Alias list:', result);
    res.end(JSON.stringify(result));
  });
}

exports.aliasnew = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (AliasNewRequest)
  **/

  var defaultArgs = {
    privatevalue: "",
    password: "",
    safesearch: "Yes",
    accepttransfers: "Yes",
    expire: "525600", /* 1 yr */
    nrequired: 0,
    aliases: []
  };
  args = varUtils.setDefaultArgs(defaultArgs, args, "POST");

  //correct type issues
  args.request.value.nrequired = args.request.value.nrequired.toString(); //number to string

  syscoinClient.aliasNew(args.request.value.aliaspeg, args.request.value.aliasname, args.request.value.password, args.request.value.publicvalue, args.request.value.privatevalue, args.request.value.safesearch, args.request.value.accepttransfers, args.request.value.expire, args.request.value.nrequired, args.request.value.aliases, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Alias new:', result);
    res.end(JSON.stringify(result));
  });
}

exports.aliasupdate = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (AliasUpdateRequest)
  **/

  //TODO: all fields should be REQUIRED *OR* this API should first fetch the current values for the alias and only replace
    // supplied values or the defaultArgs will overwrite the non-supplied fields
  var defaultArgs = {
    privatevalue: "",
    password: "",
    safesearch: "Yes",
    toalias_pubkey: "",
    accepttransfers: "Yes",
    expire: "525600",
    nrequired: 0,
    aliases: []
  };
  args = varUtils.setDefaultArgs(defaultArgs, args, "POST");

  //correct type issues
  args.request.value.nrequired = args.request.value.nrequired.toString(); //number to string

  //TODO: update core RPC docs on param ordering
  syscoinClient.aliasUpdate(args.request.value.aliaspeg, args.request.value.aliasname, args.request.value.publicvalue, args.request.value.privatevalue,  args.request.value.safesearch, args.request.value.toalias_pubkey, args.request.value.password, args.request.value.accepttransfers, args.request.value.expire, args.request.value.nrequired, args.request.value.aliases, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Alias update:', result);
    res.end(JSON.stringify(result));
  });
}

