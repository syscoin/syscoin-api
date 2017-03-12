'use strict';

var syscoinClient = require('../index').syscoinClient;

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
  var examples = {};
  examples['application/json'] = [ "{}" ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }

}

exports.aliasfilter = function(args, res, next) {
  /**
   * parameters expected in the args:
  * regexp (String)
  * from (String)
  * safesearch (String)
  **/
  syscoinClient.aliasFilter(args.regexp.value, args.maxage.value, args.from.value, args.nb.value, function(err, result, resHeaders) {
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
  syscoinClient.aliasNew(args.request.value.aliasname, args.request.value.publicvalue, args.request.value.privatevalue, function(err, result, resHeaders) {
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
  syscoinClient.aliasUpdate(args.request.value.aliasname, args.request.value.publicvalue, args.request.value.privatevalue, args.request.value.toalias_pubkey, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Alias update:', result);
    res.end(JSON.stringify(result));
  });
}

