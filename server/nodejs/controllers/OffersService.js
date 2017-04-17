var syscoinClient = require('../index').syscoinClient;
var varUtils = require('./util/varUtils');


exports.offeraccept = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferAcceptRequest)
  **/
  var argList = ["alias", "guid", "quantity", "message", "exttxid", "paymentoption"];
  args.request.value.quantity = varUtils.correctTypes(args.request.value.quantity, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer accept:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.offerAccept.apply(syscoinClient, arr);
}

exports.offeracceptacknowledge = function(args, res, next) {
  /**
   * parameters expected in the args:
  * offerguid (String)
  * offeracceptguid (String)
  **/
  var argList = ["offerguid", "offeracceptguid"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer accept acknowledge:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.offerAcceptAcknowledge.apply(syscoinClient, arr);
}

exports.offeracceptfeedback = function(args, res, next) {
  /**
   * parameters expected in the args:
  * offerguid (String)
  * offeracceptguid (String)
  * feedback (String)
  * rating (BigDecimal)
  **/
  var argList = ["offerguid", "offeracceptguid", "feedback", "rating"];
  args.rating.value = varUtils.correctTypes(args.rating.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer accept feedback:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.offerAcceptFeedback.apply(syscoinClient, arr);
}

exports.offeracceptlist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aliases (List)
  * acceptguid (String)
  * privatekey (String)
  **/
  var argList = ["aliases", "acceptguid", "privatekey"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer accept list:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.offerAcceptList.apply(syscoinClient, arr);
}

exports.offeraddwhitelist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferAddWhitelistRequest)
  **/
  var argList = ["offerguid", "aliasguid", "discountPercentage"];
  args.request.value.discountPercentage = varUtils.correctTypes(args.request.value.discountPercentage, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer add whitelist:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.offerAddWhitelist.apply(syscoinClient, arr);
}

exports.offerclearwhitelist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferClearWhitelistRequest)
  **/
  var argList = ["offerguid"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer clear whitelist:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.offerClearWhitelist.apply(syscoinClient, arr);
}

exports.offerfilter = function(args, res, next) {
  /**
   * parameters expected in the args:
  * regexp (String)
  * from (BigDecimal)
  * safesearch (String)
  * category (String)
  **/
  var argList = ["regexp", "from", "safesearch", "category"];
  args.from.value = varUtils.correctTypes(args.from.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer filter:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.offerFilter.apply(syscoinClient, arr);
}

exports.offerhistory = function(args, res, next) {
  /**
   * parameters expected in the args:
  * offer (String)
  **/
  var argList = ["offer"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer history:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.offerHistory.apply(syscoinClient, arr);
}

exports.offerinfo = function(args, res, next) {
  /**
   * parameters expected in the args:
  * guid (String)
  **/
  var argList = ["guid"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer info:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.offerInfo.apply(syscoinClient, arr);
}

exports.offerlink = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferLinkRequest)
  **/
  var argList = ["alias", "guid", "comission", "description"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer link:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.offerLink.apply(syscoinClient, arr);
}

exports.offerlist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aliases (List)
  * offer (String)
  * privatekey (String)
  **/
  var argList = ["aliases", "offer", "privatekey"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer list:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.offerList.apply(syscoinClient, arr);
}

exports.offernew = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferNewRequest)
  **/
  var argList = ["alias", "category", "title", "quantity", "price", "description", "currency", "certguid", "paymentoptions", "geolocation", "safesearch", "private"];
  args.request.value.private = varUtils.correctTypes(args.request.value.private, varUtils.TYPE_CONVERSION.BOOL_TO_NUM_STRING);
  args.request.value.quantity = varUtils.correctTypes(args.request.value.quantity, varUtils.TYPE_CONVERSION.NUM_TO_STRING);
  args.request.value.price = varUtils.correctTypes(args.request.value.price, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer new:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.offerNew.apply(syscoinClient, arr);
}

exports.offerremovewhitelist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferRemoveWhitelistRequest)
  **/
  var argList = ["offerguid", "aliasguid"];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer remove whitelist:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.offerRemoveWhitelist.apply(syscoinClient, arr);
}

exports.offerupdate = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferUpdateRequest)
  **/
  var argList = ["alias", "guid", "category", "title", "quantity", "price", "description", "currency", "private", "certguid", "geolocation", "safesearch", "comission", "paymentoptions"];
  args.request.value.private = varUtils.correctTypes(args.request.value.private, varUtils.TYPE_CONVERSION.BOOL_TO_NUM_STRING);
  args.request.value.quantity = varUtils.correctTypes(args.request.value.quantity, varUtils.TYPE_CONVERSION.NUM_TO_STRING);
  args.request.value.price = varUtils.correctTypes(args.request.value.price, varUtils.TYPE_CONVERSION.NUM_TO_STRING);
  args.request.value.comission = varUtils.correctTypes(args.request.value.comission, varUtils.TYPE_CONVERSION.NUM_TO_STRING);
  
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer update:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.offerUpdate.apply(syscoinClient, arr);
}

exports.offerwhitelist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * offerguid (String)
  **/
  var argList = ["offerguid"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer whitelist:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.offerWhitelist.apply(syscoinClient, arr);
}

