var syscoinClient = require('../index').syscoinClient;
var varUtils = require('./util/varUtils');
var commonUtils = require('./util/commonUtils');

/* Changed */
exports.escrowacknowledge = function(args, res, next) {
  var argList = [
    { prop: "escrowguid" },
    { prop: "witness" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Escrow acknowledge:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.escrowAcknowledge.apply(syscoinClient, arr);
}

/*Changed */
exports.escrowcompleterefund = function(args, res, next) {
  var argList = [
    { prop: "escrowguid" },
    { prop: "rawtx"},
    { prop: "witness" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Escrow complete refund:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.escrowCompleteRefund.apply(syscoinClient, arr);
}

/* Changed */
exports.escrowcompleterelease = function(args, res, next) {
  var argList = [
    { prop: "escrowguid" },
    { prop: "rawtx"},
    { porp: "witness", defaultValue: "" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Escrow complete release:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.escrowCompleteRelease.apply(syscoinClient, arr);
}

/* Changed */
exports.escrowfeedback = function(args, res, next) {
  var argList = [
    { prop: "escrowguid" },
    { prop: "userfrom" },
    { prop: "feedback" },
    { prop: "rating" },
    { prop: "userto" },
    { prop: "witness" },
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Escrow feedback:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.escrowFeedback.apply(syscoinClient, arr);
}

exports.escrowlist = function(args, res, next) {
  var argList = [
    { prop: "buyerAliases", defaultValue: [] },
    { prop: "sellerAliases", defaultValue: [] },
    { prop: "arbiterAliases", defaultValue: [] },
    { prop: "escrow", defaultValue: "" },
    { prop: "count", defaultValue: "10" },
    { prop: "from", defaultValue: "0" }
  ];

  args.buyerAliases.value = varUtils.correctTypes(args.buyerAliases.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);
  args.sellerAliases.value = varUtils.correctTypes(args.sellerAliases.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);
  args.arbiterAliases.value = varUtils.correctTypes(args.arbiterAliases.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);
  args.count.value = varUtils.correctTypes(args.count.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);
  args.from.value = varUtils.correctTypes(args.from.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Escrow list:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.escrowList.apply(syscoinClient, arr);
}

/* Changed*/ 
exports.escrownew = function(args, res, next) {
  var argList = [
    { prop: "getamountandaddress" },
    { prop: "alias" },
    { prop: "arbiter_alias" },
    { prop: "offer" },
    { prop: "quantity" },
    { prop: "buynow" },
    { prop: "price_per_unit_in_payment_option" },
    { prop: "shipping_amount" },
    { prop: "network_fee" },
    { prop: "arbiter_fee", defaultValue: 0.005 },
    { prop: "witness_fee", defaultValue: 0 },
    { prop: "extTx" },
    { prop: "paymentoption", defaultValue: "SYS" },
    { prop: "bid_in_payment_option" },
    { prop: "bid_in_offer_currency" },
    { prop: "witness" },

  ];

  if(varUtils.notNullOrUndefined(args.request.value.height))
    args.request.value.height = args.request.value.height.toString(); //number to string

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Escrow new:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.escrowNew.apply(syscoinClient, arr);
}

/* Changed */
exports.escrowrefund = function(args, res, next) {
  var argList = [
    { prop: "escrowguid" },
    { prop: "userrole" },
    { prop: "rawtx" },
    { prop: "witness" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Escrow refund:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.escrowRefund.apply(syscoinClient, arr);
}

/* Changed */
exports.escrowrelease = function(args, res, next) {
  var argList = [
    { prop: "escrowguid" },
    { prop: "userrole" },
    { prop: "rawtx" },
    { prop: "witness" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Escrow release:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.escrowRelease.apply(syscoinClient, arr);
}

exports.escrowbid = function(args, res, next) {
  var argList = [
    { prop: "alias" },
    { prop: "escrow" },
    { prop: "bid_in_offer_currency" },
    { prop: "bid_in_payment_option" },
    { prop: "witness" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Generate Escrow escrowbid:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.escrowBid.apply(syscoinClient, arr);
};

exports.escrowcreaterawtransaction = function(args, res, next) {
  var argList = [
    { prop: "type" },
    { prop: "escrowguid" },
    { prop: "inputs" },
    { prop: "role" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Generate Escrow escrowcreaterawtransaction:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.escrowCreateRawTransaction.apply(syscoinClient, arr);
};

exports.escrowinfo = function(args, res, next) {
  var argList = [
    { prop: "escrowguid" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Generate Escrow escrowinfo:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.escrowInfo.apply(syscoinClient, arr);
};