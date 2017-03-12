'use strict';

var syscoinClient = require('../index').syscoinClient;

exports.messageinfo = function(args, res, next) {
  /**
   * parameters expected in the args:
  * guid (String)
  **/
  syscoinClient.messageInfo(args.guid.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Message info:', result);
    res.end(JSON.stringify(result));
  });
}

exports.messagenew = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (MessageNewRequest)
  **/
  syscoinClient.messageNew(args.request.value.subject, args.request.value.message, args.request.value.fromalias, args.request.value.toalias, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Message new:', result);
    res.end(JSON.stringify(result));
  });
}

exports.messagereceivelist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aliases (List)
  * message (String)
  * privatekey (String)
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

exports.messagesentlist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aliases (List)
  * message (String)
  * privatekey (String)
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

