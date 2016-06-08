'use strict';

exports.aliasaffiliates = function(args, res, next) {
  /**
   * parameters expected in the args:
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
  * maxage (BigDecimal)
  * from (BigDecimal)
  * nb (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "expired" : true,
  "privatevalue" : "aeiou",
  "pending" : true,
  "name" : "aeiou",
  "txid" : "aeiou",
  "value" : "aeiou",
  "expires_in" : 1.3579000000000001069366817318950779736042022705078125,
  "expires_on" : 1.3579000000000001069366817318950779736042022705078125
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.aliashistory = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aliasname (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "expired" : true,
  "privatevalue" : "aeiou",
  "address" : "aeiou",
  "name" : "aeiou",
  "txid" : "aeiou",
  "value" : "aeiou",
  "expires_in" : 1.3579000000000001069366817318950779736042022705078125,
  "expires_on" : 1.3579000000000001069366817318950779736042022705078125,
  "lastupdate_height" : 1.3579000000000001069366817318950779736042022705078125,
  "aliastype" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.aliasinfo = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aliasname (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "expired" : true,
  "privatevalue" : "aeiou",
  "address" : "aeiou",
  "name" : "aeiou",
  "txid" : "aeiou",
  "value" : "aeiou",
  "expires_in" : 1.3579000000000001069366817318950779736042022705078125,
  "expires_on" : 1.3579000000000001069366817318950779736042022705078125,
  "lastupdate_height" : 1.3579000000000001069366817318950779736042022705078125,
  "ismine" : true
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.aliaslist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aliasname (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "expired" : true,
  "privatevalue" : "aeiou",
  "pending" : true,
  "name" : "aeiou",
  "txid" : "aeiou",
  "value" : "aeiou",
  "expires_in" : 1.3579000000000001069366817318950779736042022705078125,
  "expires_on" : 1.3579000000000001069366817318950779736042022705078125
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.aliasnew = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (AliasNewRequest)
  **/
    var examples = {};
  examples['application/json'] = [ "aeiou" ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.aliasscan = function(args, res, next) {
  /**
   * parameters expected in the args:
  * startName (String)
  * maxReturned (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = [ "aeiou" ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.aliasupdate = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (AliasUpdateRequest)
  **/
    var examples = {};
  examples['application/json'] = [ "aeiou" ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

