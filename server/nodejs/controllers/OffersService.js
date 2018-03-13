var syscoinClient = require('../index').syscoinClient;
var varUtils = require('./util/varUtils');
var commonUtils = require('./util/commonUtils');

exports.offerinfo = function(args, res, next) {
  var argList = [
    { prop: "guid" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Offer info:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.offerInfo.apply(syscoinClient, arr);
}

exports.offerlink = function(args, res, next) {
  var argList = [
    { prop: "alias" },
    { prop: "guid" },
    { prop: "commission" },
    { prop: "description", defaultValue: "" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Offer link:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.offerLink.apply(syscoinClient, arr);
}

exports.offernew = function(args, res, next) {
  var argList = [
    { prop: "alias" },
    { prop: "category" },
    { prop: "title" },
    { prop: "quantity" },
    { prop: "price" },
    { prop: "description" },
    { prop: "currency" },
    { prop: "certguid", defaultValue: "" },
    { prop: "paymentoptions", defaultValue: "SYS" },
    { prop: "geolocation", defaultValue: "" },
    { prop: "safesearch", defaultValue: "Yes" },
    { prop: "private", defaultValue: "0" }
  ];

  args.request.value.private = varUtils.correctTypes(args.request.value.private, varUtils.TYPE_CONVERSION.BOOL_TO_NUM_STRING);
  args.request.value.quantity = varUtils.correctTypes(args.request.value.quantity, varUtils.TYPE_CONVERSION.NUM_TO_STRING);
  args.request.value.price = varUtils.correctTypes(args.request.value.price, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Offer new:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.offerNew.apply(syscoinClient, arr);
}

exports.offerupdate = function(args, res, next) {
  var argList = [
    { prop: "alias" },
    { prop: "guid" },
    { prop: "category" },
    { prop: "title" },
    { prop: "quantity" },
    { prop: "price" },
    { prop: "description" },
    { prop: "currency" },
    { prop: "private", defaultValue: "0" },
    { prop: "certguid", defaultValue: "" },
    { prop: "geolocation", defaultValue: "" },
    { prop: "safesearch", defaultValue: "Yes" },
    { prop: "commission", defaultValue: "0" },
    { prop: "paymentoptions", defaultValue: "0" }
  ];

  args.request.value.private = varUtils.correctTypes(args.request.value.private, varUtils.TYPE_CONVERSION.BOOL_TO_NUM_STRING);
  args.request.value.quantity = varUtils.correctTypes(args.request.value.quantity, varUtils.TYPE_CONVERSION.NUM_TO_STRING);
  args.request.value.price = varUtils.correctTypes(args.request.value.price, varUtils.TYPE_CONVERSION.NUM_TO_STRING);
  args.request.value.commission = varUtils.correctTypes(args.request.value.commission, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Offer update:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.offerUpdate.apply(syscoinClient, arr);
}