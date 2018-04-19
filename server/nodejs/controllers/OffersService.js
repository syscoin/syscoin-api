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
    { prop: "description" },
    { prop: "witness" }
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
    { prop: "cert_guid"},
    { prop: "payment_options"},
    { prop: "privatevalue" },
    { prop: "units" },
    { prop: "offertype" },
    { prop: "auction_expires" },
    { prop: "auction_reserve" },
    { prop: "auction_require_witness" },
    { prop: "auction_deposit" },
    { prop: "witness" }
  ];

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
    { prop: "privatevalue" },
    { prop: "cert_guid" },
    { prop: "commission"},
    { prop: "payment_options"},
    { prop: "offer_type"},
    { prop: "auction_expires"},
    { prop: "auction_reserve"},
    { prop: "auction_require_witness"},
    { prop: "auction_deposit"},
    { prop: "witness"}
  ];

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