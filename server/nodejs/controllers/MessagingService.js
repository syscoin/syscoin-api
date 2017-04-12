'use strict';

var syscoinClient = require('../index').syscoinClient;
var varUtils = require('./util/varUtils');

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

  var defaultArgs = {
    hex: "No"
  };
  args = varUtils.setDefaultArgs(defaultArgs, args, "POST");

  syscoinClient.messageNew(args.request.value.subject, args.request.value.message, args.request.value.fromalias, args.request.value.toalias, args.request.value.hex, function(err, result, resHeaders) {
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

  var defaultArgs = {
    aliases: [],
    message: "",
    privatekey: ""
  };
  args = varUtils.setDefaultArgs(defaultArgs, args, "GET");

  syscoinClient.messageReceiveList(args.aliases.value, args.message.value, args.privatekey.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Message receive list:', result);
    res.end(JSON.stringify(result));
  });
}

exports.messagesentlist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aliases (List)
  * message (String)
  * privatekey (String)
  **/

  var defaultArgs = {
    aliases: [],
    message: "",
    privatekey: ""
  };
  args = varUtils.setDefaultArgs(defaultArgs, args, "GET");
  
  syscoinClient.messageSentList(args.aliases.value, args.message.value, args.privatekey.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Message sent list:', result);
    res.end(JSON.stringify(result));
  });
}

