'use strict';

exports.escrowclaimrefund = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (EscrowClaimRefundRequest)
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

exports.escrowclaimrelease = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (EscrowClaimReleaseRequest)
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

exports.escrowcomplete = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (EscrowCompleteRequest)
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

exports.escrowfilter = function(args, res, next) {
  /**
   * parameters expected in the args:
  * search (String)
  * maxage (BigDecimal)
  * from (BigDecimal)
  * nb (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "total" : 1.3579000000000001069366817318950779736042022705078125,
  "offeracceptlink" : "aeiou",
  "offertitle" : "aeiou",
  "time" : 1.3579000000000001069366817318950779736042022705078125,
  "expired" : true,
  "escrow" : "aeiou",
  "arbiter" : "aeiou",
  "status" : "aeiou",
  "buyer" : "aeiou",
  "offer" : "aeiou",
  "seller" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.escrowhistory = function(args, res, next) {
  /**
   * parameters expected in the args:
  * escrow (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "total" : 1.3579000000000001069366817318950779736042022705078125,
  "escrowtype" : "aeiou",
  "offeracceptlink" : "aeiou",
  "offertitle" : "aeiou",
  "height" : 1.3579000000000001069366817318950779736042022705078125,
  "expired" : true,
  "escrow" : "aeiou",
  "arbiter" : "aeiou",
  "buyer" : "aeiou",
  "txid" : "aeiou",
  "offer" : "aeiou",
  "seller" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.escrowinfo = function(args, res, next) {
  /**
   * parameters expected in the args:
  * escrow (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "total" : 1.3579000000000001069366817318950779736042022705078125,
  "escrow" : "aeiou",
  "sysfee" : 1.3579000000000001069366817318950779736042022705078125,
  "offer" : "aeiou",
  "seller" : "aeiou",
  "pay_message" : "aeiou",
  "systotal" : 1.3579000000000001069366817318950779736042022705078125,
  "time" : "aeiou",
  "offertitle" : "aeiou",
  "offeracceptlink" : "aeiou",
  "height" : 1.3579000000000001069366817318950779736042022705078125,
  "arbiter" : "aeiou",
  "buyer" : "aeiou",
  "txid" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.escrowlist = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "total" : 1.3579000000000001069366817318950779736042022705078125,
  "offeracceptlink" : "aeiou",
  "offertitle" : "aeiou",
  "time" : 1.3579000000000001069366817318950779736042022705078125,
  "expired" : true,
  "escrow" : "aeiou",
  "arbiter" : "aeiou",
  "status" : "aeiou",
  "buyer" : "aeiou",
  "offer" : "aeiou",
  "seller" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.escrownew = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (EscrowNewRequest)
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

exports.escrowscan = function(args, res, next) {
  /**
   * parameters expected in the args:
  * startEscrow (String)
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

