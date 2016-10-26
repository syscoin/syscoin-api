'use strict';

var syscoinClient = require('../index').syscoinClient;

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

exports.escrowcomplete = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (EscrowCompleteRequest)
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

exports.escrowfilter = function(args, res, next) {
  /**
   * parameters expected in the args:
  * search (String)
  * maxage (BigDecimal)
  * from (BigDecimal)
  * nb (BigDecimal)
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

exports.escrowscan = function(args, res, next) {
  /**
   * parameters expected in the args:
  * startEscrow (String)
  * maxReturned (BigDecimal)
  **/
  syscoinClient.escrowScan(args.startEscrow.value, args.maxReturned.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Escrow scan:', result);
    res.end(JSON.stringify(result));
  });
}

