'use strict';

var syscoinClient = require('../index').syscoinClient;

exports.offeraccept = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferAcceptRequest)
  **/
  syscoinClient.offerAccept(args.request.value.alias, args.request.value.guid, args.request.value.quantity, args.request.value.message, args.request.value.exttxid, args.request.value.paymentoption, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer accept:', result);
    res.end(JSON.stringify(result));
  });
}

exports.offeracceptacknowledge = function(args, res, next) {
  /**
   * parameters expected in the args:
  * offerguid (String)
  * offeracceptguid (String)
  **/
  syscoinClient.offerAcceptAcknowledge(args.offerguid.value, args.offeracceptguid.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer accept acknowledge:', result);
    res.end(JSON.stringify(result));
  });
}

exports.offeracceptfeedback = function(args, res, next) {
  /**
   * parameters expected in the args:
  * offerguid (String)
  * offeracceptguid (String)
  * feedback (String)
  * rating (BigDecimal)
  **/
  syscoinClient.offerAcceptFeedback(args.offerguid.value, args.offeracceptguid.value, args.feedback.value, args.rating.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer accept feedback:', result);
    res.end(JSON.stringify(result));
  });
}

exports.offeracceptlist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aliases (List)
  * acceptguid (String)
  * privatekey (String)
  **/
  syscoinClient.offerAcceptList(args.aliases.value, args.acceptguid.value, args.privatekey.value, function(err, result, resHeaders) {
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
  * from (BigDecimal)
  * safesearch (String)
  * category (String)
  **/
  syscoinClient.offerFilter(args.regexp.value, args.from.value, args.safesearch.value, args.category.value, function(err, result, resHeaders) {
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
  * aliases (List)
  * offer (String)
  * privatekey (String)
  **/
  syscoinClient.offerList(args.aliases.value, args.offer.value, args.privatekey.value, function(err, result, resHeaders) {
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
  console.log(JSON.stringify(args.request.value));

  //correct type issues
  if(args.request.value.private) {
    args.request.value.private = args.request.value.private ? "1" : "0"; //bool converted string
  }

  if(args.request.value.quantity) //int to string
    args.request.value.quantity = args.request.value.quantity.toString();

  if(args.request.value.price) //float to string
    args.request.value.price = args.request.value.price.toString();

  syscoinClient.offerNew(args.request.value.alias, args.request.value.category, args.request.value.title, args.request.value.quantity, args.request.value.price, args.request.value.description, args.request.value.currency, args.request.value.certguid, args.request.value.paymentoptions, args.request.value.geolocation, args.request.value.safesearch, args.request.value.private, function(err, result, resHeaders) {
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

exports.offerupdate = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferUpdateRequest)
  **/

  //correct type issues
  if(args.request.value.private) {
    args.request.value.private = args.request.value.private ? "1" : "0"; //bool converted string
  }

  if(args.request.value.quantity) //int to string
    args.request.value.quantity = args.request.value.quantity.toString();

  if(args.request.value.price) //float to string
    args.request.value.price = args.request.value.price.toString();

  if(args.request.value.comission) //float to string
    args.request.value.comission = args.request.value.comission.toString();
  
  syscoinClient.offerUpdate(args.request.value.alias, args.request.value.guid, args.request.value.category, args.request.value.title, args.request.value.quantity, args.request.value.price, args.request.value.description, args.request.value.currency, args.request.value.private, args.request.value.certguid, args.request.value.geolocation, args.request.value.safesearch, /*args.request.value.comission, args.request.value.paymentoptions,*/ function(err, result, resHeaders) {
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

