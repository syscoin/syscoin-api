var syscoinClient = require('../index').syscoinClient;
var varUtils = require('./util/varUtils');
var commonUtils = require('./util/commonUtils');


exports.offeraccept = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferAcceptRequest)
  **/
  var argList = [
    { prop: "alias" },
    { prop: "guid" },
    { prop: "quantity", defaultValue: 1 },
    { prop: "message", defaultValue: "" },
    { prop: "exttxid", defaultValue: "" },
    { prop: "paymentoption", defaultValue: "SYS" }
  ];

  args.request.value.quantity = varUtils.correctTypes(args.request.value.quantity, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
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
  var argList = [
    { prop: "offerguid" },
    { prop: "offeracceptguid" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
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
  var argList = [
    { prop: "offerguid" },
    { prop: "offeracceptguid" },
    { prop: "feedback", defaultValue: "" },
    { prop: "rating", defaultValue: 5 }
  ];

  args.rating.value = varUtils.correctTypes(args.rating.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
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
  var argList = [
    { prop: "aliases", defaultValue: [] },
    { prop: "acceptguid", defaultValue: "" },
    { prop: "privatekey", defaultValue: "" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
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
  var argList = [
    { prop: "offerguid" },
    { prop: "aliasguid" },
    { prop: "discountPercentage", defaultValue: 0 }
  ];

  args.request.value.discountPercentage = varUtils.correctTypes(args.request.value.discountPercentage, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
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
  var argList = [
    { prop: "offerguid" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
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
  * from (String)
  * safesearch (String)
  * category (String)
  **/
  var argList = [
    { prop: "regexp", defaultValue: "" },
    { prop: "from", defaultValue: "" },
    { prop: "safesearch", defaultValue: "Yes" },
    { prop: "category", defaultValue: "" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
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
  var argList = [
    { prop: "offer" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
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
  /**
   * parameters expected in the args:
  * request (OfferLinkRequest)
  **/
  var argList = [
    { prop: "alias" },
    { prop: "guid" },
    { prop: "comission" },
    { prop: "description", defaultValue: "" }
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

exports.offerlist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aliases (List)
  * offer (String)
  * privatekey (String)
  **/
  var argList = [
    { prop: "aliases", defaultValue: [] },
    { prop: "offer", defaultValue: "" },
    { prop: "privatekey", defaultValue: "" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
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
  var argList = [
    { prop: "alias" },
    { prop: "category" },
    { prop: "title" },
    { prop: "quantity" },
    { prop: "price" },
    { prop: "description" },
    { prop: "currency" },
    { prop: "certguid", defaultValue: "" },
    { prop: "paymentoptions", defaultValue: "SYS" },
    { prop: "geolocation", defaultValue: "" },
    { prop: "safesearch", defaultValue: "Yes" },
    { prop: "private", defaultValue: "0" }
  ];

  args.request.value.private = varUtils.correctTypes(args.request.value.private, varUtils.TYPE_CONVERSION.BOOL_TO_NUM_STRING);
  args.request.value.quantity = varUtils.correctTypes(args.request.value.quantity, varUtils.TYPE_CONVERSION.NUM_TO_STRING);
  args.request.value.price = varUtils.correctTypes(args.request.value.price, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

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

exports.offerremovewhitelist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferRemoveWhitelistRequest)
  **/
  var argList = [
    { prop: "offerguid" },
    { prop: "aliasguid" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
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
  var argList = [
    { prop: "alias" },
    { prop: "guid" },
    { prop: "category" },
    { prop: "title" },
    { prop: "quantity" },
    { prop: "price" },
    { prop: "description" },
    { prop: "currency" },
    { prop: "private", defaultValue: "0" },
    { prop: "certguid", defaultValue: "" },
    { prop: "geolocation", defaultValue: "" },
    { prop: "safesearch", defaultValue: "Yes" },
    { prop: "comission", defaultValue: "0" },
    { prop: "paymentoptions", defaultValue: "0" }
  ];

  args.request.value.private = varUtils.correctTypes(args.request.value.private, varUtils.TYPE_CONVERSION.BOOL_TO_NUM_STRING);
  args.request.value.quantity = varUtils.correctTypes(args.request.value.quantity, varUtils.TYPE_CONVERSION.NUM_TO_STRING);
  args.request.value.price = varUtils.correctTypes(args.request.value.price, varUtils.TYPE_CONVERSION.NUM_TO_STRING);
  args.request.value.comission = varUtils.correctTypes(args.request.value.comission, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

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

exports.offerwhitelist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * offerguid (String)
  **/
  var argList = [
    { prop: "offerguid" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Offer whitelist:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.offerWhitelist.apply(syscoinClient, arr);
}

