'use strict';

var syscoinClient = require('../index').syscoinClient;

exports.messagehistory = function(args, res, next) {
  /**
   * parameters expected in the args:
  * message (String)
  **/
  syscoinClient.messageHistory(args.message.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Message history:', result);
    res.end(JSON.stringify(result));
  });
}

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

exports.messagelist = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  syscoinClient.messageList(function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Message list:', result);
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

exports.messagesentlist = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  syscoinClient.messageSentList(function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Message sent list:', result);
    res.end(JSON.stringify(result));
  });
}

