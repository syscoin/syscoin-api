'use strict';

exports.messagehistory = function(args, res, next) {
  /**
   * parameters expected in the args:
  * message (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "message" : "aeiou",
  "to" : "aeiou",
  "time" : 1.3579000000000001069366817318950779736042022705078125,
  "GUID" : "aeiou",
  "subject" : "aeiou",
  "messagetype" : "aeiou",
  "from" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.messageinfo = function(args, res, next) {
  /**
   * parameters expected in the args:
  * guid (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "message" : "aeiou",
  "to" : "aeiou",
  "time" : 1.3579000000000001069366817318950779736042022705078125,
  "height" : 1.3579000000000001069366817318950779736042022705078125,
  "GUID" : "aeiou",
  "subject" : "aeiou",
  "txid" : "aeiou",
  "from" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.messagelist = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "message" : "aeiou",
  "to" : "aeiou",
  "time" : 1.3579000000000001069366817318950779736042022705078125,
  "GUID" : "aeiou",
  "subject" : "aeiou",
  "from" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.messagenew = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (MessageNewRequest)
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

exports.messagesentlist = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "message" : "aeiou",
  "to" : "aeiou",
  "time" : 1.3579000000000001069366817318950779736042022705078125,
  "GUID" : "aeiou",
  "subject" : "aeiou",
  "from" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

