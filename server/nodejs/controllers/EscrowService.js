'use strict';

var syscoinClient = require('../index').syscoinClient;

exports.escrowacknowledge = function(args, res, next) {
  /**
   * parameters expected in the args:
  * escrowguid (String)
  **/
    var examples = {};
  examples['application/json'] = [ "aeiou" ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.escrowclaimrefund = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (EscrowClaimRefundRequest)
  **/
  syscoinClient.escrowClaimRefund(args.request.value.guid, function(err, result, resHeaders) {
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
  syscoinClient.escrowClaimRelease(args.request.value.guid, function(err, result, resHeaders) {
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
    var examples = {};
  examples['application/json'] = [ "aeiou" ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.escrowcompleterelease = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (EscrowCompleteReleaseRequest)
  **/
  syscoinClient.escrowComplete(args.request.value.guid, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Escrow complete:', result);
    res.end(JSON.stringify(result));
  });
}

exports.escrowfeedback = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (EscrowFeedbackRequest)
  **/
    var examples = {};
  examples['application/json'] = [ "aeiou" ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.escrowfilter = function(args, res, next) {
  /**
   * parameters expected in the args:
  * regexp (String)
  * from (BigDecimal)
  **/
  syscoinClient.escrowFilter(args.search.value, args.maxage.value, args.from.value, args.nb.value, function(err, result, resHeaders) {
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
  syscoinClient.escrowNew(args.request.value.alias, args.request.value.offer, args.request.value.quantity, args.request.value.message, args.request.value.arbiter, function(err, result, resHeaders) {
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
    var examples = {};
  examples['application/json'] = [ "aeiou" ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.escrowrelease = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (EscrowReleaseRequest)
  **/
    var examples = {};
  examples['application/json'] = [ "aeiou" ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.generateescrowmultisig = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (GenerateEscrowMultisigRequest)
  **/
    var examples = {};
  examples['application/json'] = [ "aeiou" ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

