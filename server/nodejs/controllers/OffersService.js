'use strict';

var syscoinClient = require('../index').syscoinClient;

exports.offeraccept = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferAcceptRequest)
  **/
  syscoinClient.offerAccept(args.request.value.alias, args.request.value.guid, args.request.value.quantity, args.request.value.message, args.request.value.btcTxId, args.request.value.linkedacceptguidtxhash, args.request.value.escrowTxHash, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer accept:', result);
    res.end(JSON.stringify(result));
  });
}

exports.offeracceptlist = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  syscoinClient.offerAcceptList(function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer accept list:', result);
    res.end(JSON.stringify(result));
  });
}

exports.offeraddwhitelist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferAddWhitelistRequest)
  **/
  syscoinClient.offerAddWhitelist(args.request.value.offerguid, args.request.value.aliasguid, args.request.value.discountPercentage, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer add whitelist:', result);
    res.end(JSON.stringify(result));
  });
}

exports.offerclearwhitelist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferClearWhitelistRequest)
  **/
  syscoinClient.offerClearWhitelist(args.request.value.offerguid, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer clear whitelist:', result);
    res.end(JSON.stringify(result));
  });
}

exports.offerfilter = function(args, res, next) {
  /**
   * parameters expected in the args:
  * regexp (String)
  * maxage (BigDecimal)
  * from (BigDecimal)
  * nb (BigDecimal)
  **/
  syscoinClient.offerFilter(args.regexp.value, args.maxage.value, args.from.value, args.nb.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer filter:', result);
    res.end(JSON.stringify(result));
  });
}

exports.offerhistory = function(args, res, next) {
  /**
   * parameters expected in the args:
  * offer (String)
  **/
  syscoinClient.offerHistory(args.offer.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer history:', result);
    res.end(JSON.stringify(result));
  });
}

exports.offerinfo = function(args, res, next) {
  /**
   * parameters expected in the args:
  * guid (String)
  **/
  syscoinClient.offerInfo(args.guid.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer info:', result);
    res.end(JSON.stringify(result));
  });
}

exports.offerlink = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferLinkRequest)
  **/
  syscoinClient.offerLink(args.request.value.alias, args.request.value.guid, args.request.value.comission, args.request.value.description, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer link:', result);
    res.end(JSON.stringify(result));
  });
}

exports.offerlist = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  syscoinClient.offerList(function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer list:', result);
    res.end(JSON.stringify(result));
  });
}

exports.offernew = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferNewRequest)
  **/
  syscoinClient.offerNew(args.request.value.aliaspeg, args.request.value.alias, args.request.value.category, args.request.value.title, args.request.value.quantity, args.request.value.price, args.request.value.description, args.request.value.currency, args.request.value.certguid, args.request.value.excelusiveResell, args.request.value.acceptBTCOnly, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer new:', result);
    res.end(JSON.stringify(result));
  });
}

exports.offerremovewhitelist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferRemoveWhitelistRequest)
  **/
  syscoinClient.offerRemoveWhitelist(args.request.value.offerguid, args.request.value.aliasguid, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer remove whitelist:', result);
    res.end(JSON.stringify(result));
  });
}

exports.offerscan = function(args, res, next) {
  /**
   * parameters expected in the args:
  * startOffer (String)
  * maxReturned (BigDecimal)
  **/
  syscoinClient.offerScan(args.startOffer.value, args.maxReturned.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Alias affiliates:', result);
    res.end(JSON.stringify(result));
  });
}

exports.offerupdate = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferUpdateRequest)
  **/
  syscoinClient.offerUpdate(args.request.value.aliaspeg, args.request.value.alias, args.request.value.guid, args.request.value.category, args.request.value.title, args.request.value.quantity, args.request.value.price, args.request.value.description, args.request.value.private, args.request.value.certguid, args.request.value.excelusiveResell, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer update:', result);
    res.end(JSON.stringify(result));
  });
}

exports.offerwhitelist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * offerguid (String)
  **/
  syscoinClient.offerWhitelist(args.offerguid.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer whitelist:', result);
    res.end(JSON.stringify(result));
  });
}

