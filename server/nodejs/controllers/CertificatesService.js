var syscoinClient = require('../index').syscoinClient;
var varUtils = require('./util/varUtils');
var commonUtils = require('./util/commonUtils');

/* Deprecated */
exports.certcount = function(args, res, next) {
  var argList = [
    { prop: "aliases", defaultValue: [] }
  ];

  args.aliases.value = varUtils.correctTypes(args.aliases.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Cert count:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.certCount.apply(syscoinClient, arr);
}

/* Deprecated */
exports.certfilter = function(args, res, next) {
  var argList = [
    { prop: "regexp", defaultValue: "" },
    { prop: "from", defaultValue: "" },
    { prop: "count", defaultValue: "10" },
    { prop: "safesearch", defaultValue: "Yes" },
    { prop: "category", defaultValue: "" }
  ];

  args.count.value = varUtils.correctTypes(args.count.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Cert filter:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.certFilter.apply(syscoinClient, arr);
}

/* Deprecated */
exports.certhistory = function(args, res, next) {
  var argList = [
    { prop: "certname" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Cert history:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.certHistory.apply(syscoinClient, arr);
}

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

/* Deprecated */
exports.certlist = function(args, res, next) {
  var argList = [
    { prop: "aliases" },
    { prop: "cert" , defaultValue: ""},
    { prop: "count", defaultValue: "10" },
    { prop: "from", defaultValue: "0" }
  ];

  args.count.value = varUtils.correctTypes(args.count.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);
  args.from.value = varUtils.correctTypes(args.from.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);
  args.aliases.value = varUtils.correctTypes(args.aliases.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Cert list:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.certList.apply(syscoinClient, arr);
}

/* Changed */
exports.certnew = function(args, res, next) {
  var argList = [
    //{ prop: "private" },
    //{ prop: "safesearch", defaultValue: "Yes" },
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
    //{ prop: "certkey" },
    //{ prop: "viewonly", defaultValue: "0" }
    { prop: "alias" },
    { prop: "guid" },
    { prop: "public" },
    { prop: "accessflags", defaultValue: 2 },
    { prop: "witness" },

  ];

  args.request.value.viewonly = varUtils.correctTypes(args.request.value.viewonly, varUtils.TYPE_CONVERSION.BOOL_TO_NUM_STRING);

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
    //{ prop: "alias" },
    //{ prop: "private" },
    //{ prop: "safesearch", defaultValue: "Yes" },
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

