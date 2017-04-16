'use strict';

var syscoinClient = require('../index').syscoinClient;
var varUtils = require('./util/varUtils');

exports.messageinfo = function(args, res, next) {
  /**
   * parameters expected in the args:
  * guid (String)
  **/
  var argList = ["guid"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Message info:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.messageInfo.apply(syscoinClient, arr);
}

exports.messagenew = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (MessageNewRequest)
  **/
  var argList = ["subject", "message", "fromalias", "toalias", "hex"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Message new:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.messageNew.apply(syscoinClient, arr);
}

exports.messagereceivelist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aliases (List)
  * message (String)
  * privatekey (String)
  **/
  var argList = ["aliases", "message", "privatekey"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Message receive list:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.messageReceiveList.apply(syscoinClient, arr);
}

exports.messagesentlist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aliases (List)
  * message (String)
  * privatekey (String)
  **/
  var argList = ["aliases", "message", "privatekey"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Message sent list:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.messageSentList.apply(syscoinClient, arr);
}

