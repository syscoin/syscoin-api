'use strict';

var syscoinClient = require('../index').syscoinClient;

exports.escrowacknowledge = function(args, res, next) {
  /**
   * parameters expected in the args:
  * escrowguid (String)
  **/
  syscoinClient.escrowAcknowledge(args.escrowguid.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Escrow acknowledge:', result);
    res.end(JSON.stringify(result));
  });
}

exports.escrowclaimrefund = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (EscrowClaimRefundRequest)
  **/
  syscoinClient.escrowClaimRefund(args.request.value.guid, args.request.value.rawtx, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Escrow claim refund:', result);
    res.end(JSON.stringify(result));
  });
}

exports.escrowclaimrelease = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (EscrowClaimReleaseRequest)
  **/
  syscoinClient.escrowClaimRelease(args.request.value.guid, args.request.value.rawtx, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Escrow claim release:', result);
    res.end(JSON.stringify(result));
  });
}

exports.escrowcompleterefund = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (EscrowCompleteRefundRequest)
  **/
  syscoinClient.escrowCompleteRefund(args.request.value.escrowguid, args.request.value.rawtx, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Escrow complete refund:', result);
    res.end(JSON.stringify(result));
  });
}

exports.escrowcompleterelease = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (EscrowCompleteReleaseRequest)
  **/
  syscoinClient.escrowComplete(args.request.value.guid, args.request.value.rawtx, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Escrow complete release:', result);
    res.end(JSON.stringify(result));
  });
}

exports.escrowfeedback = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (EscrowFeedbackRequest)
  **/
  syscoinClient.escrowFeedbackRequest(args.request.value.escrowguid, args.request.value.userrole, args.request.value.feedbackprimary, args.request.value.ratingprimary, args.request.value.feedbacksecondary, args.request.value.ratingsecondary, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Escrow feedback:', result);
    res.end(JSON.stringify(result));
  });
}

exports.escrowfilter = function(args, res, next) {
  /**
   * parameters expected in the args:
  * regexp (String)
  * from (BigDecimal)
  **/
  syscoinClient.escrowFilter(args.regexp.value, args.from.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Escrow filter:', result);
    res.end(JSON.stringify(result));
  });
}

exports.escrowhistory = function(args, res, next) {
  /**
   * parameters expected in the args:
  * escrow (String)
  **/
  syscoinClient.escrowHistory(args.escrow.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Escrow history:', result);
    res.end(JSON.stringify(result));
  });
}

exports.escrowinfo = function(args, res, next) {
  /**
   * parameters expected in the args:
  * escrow (String)
  **/
  syscoinClient.escrowInfo(args.escrow.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Escrow info:', result);
    res.end(JSON.stringify(result));
  });
}

exports.escrowlist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aliases (List)
  * escrow (String)
  * privatekey (String)
  **/
  syscoinClient.escrowList(function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Escrow list:', result);
    res.end(JSON.stringify(result));
  });
}

exports.escrownew = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (EscrowNewRequest)
  **/
  syscoinClient.escrowNew(args.request.value.alias, args.request.value.offer, args.request.value.quantity, args.request.value.message, args.request.value.arbiter, args.request.value.exttx, args.request.value.paymentoption, args.request.value.redeemscript, args.request.value.height, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Escrow new:', result);
    res.end(JSON.stringify(result));
  });
}

exports.escrowrefund = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (EscrowRefundRequest)
  **/
  syscoinClient.escrowRefund(args.request.value.escrowguid, args.request.value.userrole, args.request.value.rawtx, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Escrow refund:', result);
    res.end(JSON.stringify(result));
  });
}

exports.escrowrelease = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (EscrowReleaseRequest)
  **/
  syscoinClient.escrowRelease(args.request.value.escrowguid, args.request.value.userrole, args.request.value.rawtx, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Escrow release:', result);
    res.end(JSON.stringify(result));
  });
}

exports.generateescrowmultisig = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (GenerateEscrowMultisigRequest)
  **/
  syscoinClient.generateEscrowMultisig(args.request.value.buyer, args.request.value.offerguid, args.request.value.quantity, args.request.value.arbiter, args.request.value.paymentoption, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Generate Escrow Multisig:', result);
    res.end(JSON.stringify(result));
  });
}

