var syscoinClient = require('../index').syscoinClient;
var varUtils = require('./util/varUtils');
var commonUtils = require('./util/commonUtils');


exports.offeraccept = function(args, res, next) {
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

exports.offeracceptcount = function(args, res, next) {
  var argList = [
    { prop: "aliases", defaultValue: [] },
    { prop: "filterpurchases", defaultValue: "true"},
    { prop: "filtersales", defaultValue: "true"}
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Offer accept count:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.offerAcceptCount.apply(syscoinClient, arr);
}

exports.offeracceptfeedback = function(args, res, next) {
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
  var argList = [
    { prop: "aliases", defaultValue: [] },
    { prop: "guid", defaultValue: "" },
    { prop: "filterpurchases", defaultValue: "true"},
    { prop: "filtersales", defaultValue: "true"},
    { prop: "count", defaultValue: "10" },
    { prop: "from", defaultValue: "0" }
  ];

  args.count.value = varUtils.correctTypes(args.count.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);
  args.from.value = varUtils.correctTypes(args.from.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

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

exports.offercount = function(args, res, next) {
  var argList = [
    { prop: "aliases", defaultValue: [] }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    console.log('Offer count:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.offerCount.apply(syscoinClient, arr);
}

exports.offerfilter = function(args, res, next) {
  var argList = [
    { prop: "regexp", defaultValue: "" },
    { prop: "from", defaultValue: "" },
    { prop: "count", defaultValue: "10" },
    { prop: "safesearch", defaultValue: "Yes" },
    { prop: "category", defaultValue: "" }
  ];

  args.count.value = varUtils.correctTypes(args.count.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

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
  var argList = [
    { prop: "alias" },
    { prop: "guid" },
    { prop: "commission" },
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
  var argList = [
    { prop: "aliases", defaultValue: [] },
    { prop: "guid", defaultValue: "" },
    { prop: "count", defaultValue: "10" },
    { prop: "from", defaultValue: "0" }
  ];

  args.count.value = varUtils.correctTypes(args.count.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);
  args.from.value = varUtils.correctTypes(args.from.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

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
    { prop: "commission", defaultValue: "0" },
    { prop: "paymentoptions", defaultValue: "0" }
  ];

  args.request.value.private = varUtils.correctTypes(args.request.value.private, varUtils.TYPE_CONVERSION.BOOL_TO_NUM_STRING);
  args.request.value.quantity = varUtils.correctTypes(args.request.value.quantity, varUtils.TYPE_CONVERSION.NUM_TO_STRING);
  args.request.value.price = varUtils.correctTypes(args.request.value.price, varUtils.TYPE_CONVERSION.NUM_TO_STRING);
  args.request.value.commission = varUtils.correctTypes(args.request.value.commission, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

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

