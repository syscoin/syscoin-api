var syscoinClient = require('../index').syscoinClient;
var varUtils = require('./util/varUtils');
var commonUtils = require('./util/commonUtils');

exports.certinfo = function(args, res, next) {
  var argList = [
    { prop: "guid" }
  ];
  
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Cert info:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.certInfo.apply(syscoinClient, arr);
}

/* Changed */
exports.certnew = function(args, res, next) {
  var argList = [
    { prop: "alias" },
    { prop: "title" },
    { prop: "public" },
    { prop: "category", defaultValue: "certificates" },
    { prop: "witness"}
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Cert new:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.certNew.apply(syscoinClient, arr);
}

/* Changed */
exports.certtransfer = function(args, res, next) {
  var argList = [
    { prop: "alias" },
    { prop: "guid" },
    { prop: "public" },
    { prop: "accessflags", defaultValue: 2 },
    { prop: "witness" },

  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Cert transfer:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.certTransfer.apply(syscoinClient, arr);
}

/* Changed */
exports.certupdate = function(args, res, next) {
  var argList = [
    { prop: "guid" },
    { prop: "title" },
    { prop: "public" },
    { prop: "category", defaultValue: "certificates" },
    { prop: "witness" },
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Cert Update:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.certUpdate.apply(syscoinClient, arr);
}

