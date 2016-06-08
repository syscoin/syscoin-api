'use strict';

exports.certfilter = function(args, res, next) {
  /**
   * parameters expected in the args:
  * regexp (String)
  * maxage (String)
  * from (String)
  * nb (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "title" : "aeiou",
  "expired" : true,
  "cert" : "aeiou",
  "alias" : "aeiou",
  "address" : "aeiou",
  "data" : "aeiou",
  "expires_in" : 1.3579000000000001069366817318950779736042022705078125,
  "expires_on" : 1.3579000000000001069366817318950779736042022705078125,
  "private" : true
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.certhistory = function(args, res, next) {
  /**
   * parameters expected in the args:
  * certname (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "expired" : true,
  "cert" : "aeiou",
  "alias" : "aeiou",
  "address" : "aeiou",
  "certtype" : "aeiou",
  "txid" : "aeiou",
  "data" : "aeiou",
  "expires_in" : 1.3579000000000001069366817318950779736042022705078125,
  "expires_on" : 1.3579000000000001069366817318950779736042022705078125,
  "private" : true
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.certinfo = function(args, res, next) {
  /**
   * parameters expected in the args:
  * certname (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "title" : "aeiou",
  "expired" : true,
  "height" : 1.3579000000000001069366817318950779736042022705078125,
  "cert" : "aeiou",
  "alias" : "aeiou",
  "address" : "aeiou",
  "data" : "aeiou",
  "txid" : "aeiou",
  "expires_in" : 1.3579000000000001069366817318950779736042022705078125,
  "expires_on" : 1.3579000000000001069366817318950779736042022705078125,
  "ismine" : true,
  "private" : true
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.certlist = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "title" : "aeiou",
  "expired" : true,
  "cert" : "aeiou",
  "alias" : "aeiou",
  "address" : "aeiou",
  "data" : "aeiou",
  "expires_in" : 1.3579000000000001069366817318950779736042022705078125,
  "expires_on" : 1.3579000000000001069366817318950779736042022705078125,
  "private" : true
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.certnew = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (CertNewRequest)
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

exports.certscan = function(args, res, next) {
  /**
   * parameters expected in the args:
  * startCert (String)
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

exports.certtransfer = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (CertTransferRequest)
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

exports.certupdate = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (CertUpdateRequest)
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

