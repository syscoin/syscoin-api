var syscoinClient = require('../index').syscoinClient;
var varUtils = require('./util/varUtils');


exports.escrowacknowledge = function(args, res, next) {
  /**
   * parameters expected in the args:
  * escrowguid (String)
  **/
  var argList = ["escrowguid"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Escrow acknowledge:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.escrowAcknowledge.apply(syscoinClient, arr);
}

exports.escrowclaimrefund = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (EscrowClaimRefundRequest)
  **/
  var argList = ["guid", "rawtx"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Escrow claim refund:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.escrowClaimRefund.apply(syscoinClient, arr);
}

exports.escrowclaimrelease = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (EscrowClaimReleaseRequest)
  **/
  var argList = ["guid", "rawtx"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Escrow claim release:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.escrowClaimRelease.apply(syscoinClient, arr);
}

exports.escrowcompleterefund = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (EscrowCompleteRefundRequest)
  **/
  var argList = ["escrowguid", "rawtx"];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Escrow complete refund:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.escrowCompleteRefund.apply(syscoinClient, arr);
}

exports.escrowcompleterelease = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (EscrowCompleteReleaseRequest)
  **/
  var argList = ["escrowguid", "rawtx"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Escrow complete release:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.escrowCompleteRelease.apply(syscoinClient, arr);
}

exports.escrowfeedback = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (EscrowFeedbackRequest)
  **/
  var argList = ["escrowguid", "userrole", "feedbackprimary", "ratingprimary", "feedbacksecondary", "ratingsecondary"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Escrow feedback:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.escrowFeedback.apply(syscoinClient, arr);
}

exports.escrowfilter = function(args, res, next) {
  /**
   * parameters expected in the args:
  * regexp (String)
  * from (BigDecimal)
  **/
  var argList = ["regexp", "from"];

  //correct type issus
  if(varUtils.notNullOrUndefined(args.from.value))
    args.from.value = args.from.value.toString(); //number to string

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Escrow filter:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.escrowFilter.apply(syscoinClient, arr);
}

exports.escrowhistory = function(args, res, next) {
  /**
   * parameters expected in the args:
  * escrow (String)
  **/
  var argList = ["escrow"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Escrow history:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.escrowHistory.apply(syscoinClient, arr);
}

exports.escrowinfo = function(args, res, next) {
  /**
   * parameters expected in the args:
  * escrow (String)
  **/
  var argList = ["escrow"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Escrow info:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.escrowInfo.apply(syscoinClient, arr);
}

exports.escrowlist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aliases (List)
  * escrow (String)
  * privatekey (String)
  **/
  var argList = ["aliases", "escrow", "privatekey"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Escrow list:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.escrowList.apply(syscoinClient, arr);
}

exports.escrownew = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (EscrowNewRequest)
  **/
  var argList = ["alias", "offer", "quantity", "message", "arbiter", "paymentoption", "redeemscript", "height"];

  //correct type issues
  if(varUtils.notNullOrUndefined(args.request.value.quantity))
    args.request.value.quantity = args.request.value.quantity.toString(); //number to string

  if(varUtils.notNullOrUndefined(args.request.value.height))
    args.request.value.height = args.request.value.height.toString(); //number to string

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Escrow new:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.escrowNew.apply(syscoinClient, arr);
}

exports.aliaspay = function(args, res, next) {
  /**
   * parameters expected in the args:
   * request (AliasPayRequest)
   **/
  var argList = ["alias", "amounts", "minconf", "comment"];

  if(varUtils.notNullOrUndefined(args.request.value.minconf))
    args.request.value.nrequired = args.request.value.minconf.toString(); //number to string

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Alias pay:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.aliaspay.apply(syscoinClient, arr);
}

exports.escrowrefund = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (EscrowRefundRequest)
  **/
  var argList = ["escrowguid", "userrole", "rawtx"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Escrow refund:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.escrowRefund.apply(syscoinClient, arr);
}

exports.escrowrelease = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (EscrowReleaseRequest)
  **/
  var argList = ["escrowguid", "userrole", "rawtx"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Escrow release:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.escrowRelease.apply(syscoinClient, arr);
}

exports.generateescrowmultisig = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (GenerateEscrowMultisigRequest)
  **/
  var argList = ["buyer", "offerguid", "quantity", "arbiter", "paymentoption"];

  //correct type issus
  if(varUtils.notNullOrUndefined(args.request.value.quantity))
    args.request.value.quantity = args.request.value.quantity.toString(); //number to string

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Generate Escrow Multisig:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.generateEscrowMultisig.apply(syscoinClient, arr);
}

