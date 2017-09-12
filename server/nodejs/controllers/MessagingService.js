var syscoinClient = require('../index').syscoinClient;
var varUtils = require('./util/varUtils');
var commonUtils = require('./util/commonUtils');

exports.messageinfo = function(args, res, next) {
  var argList = [
    { prop: "guid" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Message info:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.messageInfo.apply(syscoinClient, arr);
}

exports.messagenew = function(args, res, next) {
  var argList = [
    { prop: "subject" },
    { prop: "message" },
    { prop: "fromalias" },
    { prop: "toalias" },
    { prop: "hex", defaultValue: "No" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Message new:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.messageNew.apply(syscoinClient, arr);
}

exports.messagereceivecount = function(args, res, next) {
  var argList = [
    { prop: "aliases", defaultValue: [] }
  ];

  args.aliases.value = varUtils.correctTypes(args.aliases.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Message recv count:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.messageReceiveCount.apply(syscoinClient, arr);
}

exports.messagereceivelist = function(args, res, next) {
  var argList = [
    { prop: "aliases", defaultValue: [] },
    { prop: "message", defaultValue: "" },
    { prop: "count", defaultValue: "10" },
    { prop: "from", defaultValue: "0" }
  ];

  args.aliases.value = varUtils.correctTypes(args.aliases.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);
  args.count.value = varUtils.correctTypes(args.count.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);
  args.from.value = varUtils.correctTypes(args.from.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Message receive list:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.messageReceiveList.apply(syscoinClient, arr);
}

exports.messagesentcount = function(args, res, next) {
  var argList = [
    { prop: "aliases", defaultValue: [] }
  ];

  args.aliases.value = varUtils.correctTypes(args.aliases.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Message sent count:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.messageSentCount.apply(syscoinClient, arr);
}

exports.messagesentlist = function(args, res, next) {
  var argList = [
    { prop: "aliases", defaultValue: [] },
    { prop: "message", defaultValue: "" },
    { prop: "count", defaultValue: "10" },
    { prop: "from", defaultValue: "0" }
  ];

  args.aliases.value = varUtils.correctTypes(args.aliases.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);
  args.count.value = varUtils.correctTypes(args.count.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);
  args.from.value = varUtils.correctTypes(args.from.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Message sent list:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.messageSentList.apply(syscoinClient, arr);
}

