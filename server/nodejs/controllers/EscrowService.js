var syscoinClient = require('../index').syscoinClient;
var varUtils = require('./util/varUtils');
var commonUtils = require('./util/commonUtils');


exports.escrowacknowledge = function(args, res, next) {
  var argList = [
    { prop: "escrowguid" }
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

/* Deprecated */
exports.escrowclaimrefund = function(args, res, next) {
  var argList = [
    { prop: "guid" },
    { prop: "rawtx", defaultValue: "" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Escrow claim refund:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.escrowClaimRefund.apply(syscoinClient, arr);
}

/* Deprecated */
exports.escrowclaimrelease = function(args, res, next) {
  var argList = [
    { prop: "guid" },
    { prop: "rawtx", defaultValue: "" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Escrow claim release:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.escrowClaimRelease.apply(syscoinClient, arr);
}

exports.escrowcompleterefund = function(args, res, next) {
  var argList = [
    { prop: "escrowguid" },
    { prop: "rawtx", defaultValue: "" }
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

exports.escrowcompleterelease = function(args, res, next) {
  var argList = [
    { prop: "escrowguid" },
    { prop: "rawtx", defaultValue: "" }
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

/* Deprecated */
exports.escrowcount = function(args, res, next) {
  var argList = [
    { prop: "buyerAliases", defaultValue: [] },
    { prop: "sellerAliases", defaultValue: [] },
    { prop: "arbiterAliases", defaultValue: [] }
  ];

  args.buyerAliases.value = varUtils.correctTypes(args.buyerAliases.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);
  args.sellerAliases.value = varUtils.correctTypes(args.sellerAliases.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);
  args.arbiterAliases.value = varUtils.correctTypes(args.arbiterAliases.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Escrow count:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.escrowCount.apply(syscoinClient, arr);
}

exports.escrowfeedback = function(args, res, next) {
  var argList = [
    { prop: "escrowguid" },
    { prop: "userrole" },
    { prop: "feedbackprimary" },
    { prop: "ratingprimary" },
    { prop: "feedbacksecondary" },
    { prop: "ratingsecondary" }
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

/* Deprecated */
exports.escrowfilter = function(args, res, next) {
  var argList = [
    { prop: "regexp", defaultValue: "" },
    { prop: "from", defaultValue: "" },
    { prop: "count", defaultValue: "10" }
  ];

  args.count.value = varUtils.correctTypes(args.count.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Escrow filter:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.escrowFilter.apply(syscoinClient, arr);
}

/* Deprecated */
exports.escrowhistory = function(args, res, next) {
  var argList = [
    { prop: "escrow" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Escrow history:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.escrowHistory.apply(syscoinClient, arr);
}

/* Deprecated */
exports.escrowinfo = function(args, res, next) {
  var argList = [
    { prop: "escrow" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Escrow info:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.escrowInfo.apply(syscoinClient, arr);
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

exports.escrownew = function(args, res, next) {
  var argList = [
    { prop: "alias" },
    { prop: "offer" },
    { prop: "quantity" },
    { prop: "message" },
    { prop: "arbiter" },
    { prop: "exttx", defaultValue: "" },
    { prop: "paymentoption", defaultValue: "SYS" },
    { prop: "redeemscript", defaultValue: "" },
    { prop: "height", defaultValue: "0" }
  ];

  args.request.value.quantity = varUtils.correctTypes(args.request.value.quantity, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

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

exports.escrowrefund = function(args, res, next) {
  var argList = [
    { prop: "escrowguid" },
    { prop: "userrole" },
    { prop: "rawtx", defaultValue: "" }
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

exports.escrowrelease = function(args, res, next) {
  var argList = [
    { prop: "escrowguid" },
    { prop: "userrole" },
    { prop: "rawtx", defaultValue: "" }
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

/* Deprecated */
exports.generateescrowmultisig = function(args, res, next) {
  var argList = [
    { prop: "buyer" },
    { prop: "offerguid" },
    { prop: "quantity" },
    { prop: "arbiter" },
    { prop: "paymentoption", defaultValue: "SYS" }
  ];
  
  args.request.value.quantity = varUtils.correctTypes(args.request.value.quantity, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Generate Escrow Multisig:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.generateEscrowMultisig.apply(syscoinClient, arr);
}

