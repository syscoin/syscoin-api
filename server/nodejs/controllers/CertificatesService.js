'use strict';

var syscoinClient = require('../index').syscoinClient;
var varUtils = require('./util/varUtils');

exports.certfilter = function(args, res, next) {
  /**
   * parameters expected in the args:
  * regexp (String)
  * from (String)
  * certfilter (String) TODO: remove this, dont pass thru
  * safesearch (String)
  * category (String)
  **/
  var argList = [
    { prop: "regexp", defaultValue: "" },
    { prop: "from", defaultValue: 0 },
    //{ prop: "certfilter", defaultValue: "" },
    { prop: "safesearch", defaultValue: "Yes" },
    { prop: "category", defaultValue: "" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Cert filter:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.certFilter.apply(syscoinClient, arr);
}

exports.certhistory = function(args, res, next) {
  /**
   * parameters expected in the args:
  * certname (String)
  **/
  var argList = [
    { prop: "certname" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Cert history:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.certHistory.apply(syscoinClient, arr);
}

exports.certinfo = function(args, res, next) {
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
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Cert info:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.certInfo.apply(syscoinClient, arr);
}

exports.certlist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aliases (List)
  * cert (String)
  * privatekey (String)
  **/
  var argList = [
    { prop: "aliases" },
    { prop: "cert" },
    { prop: "privatekey", defaultValue: "" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Cert list:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.certList.apply(syscoinClient, arr);
}

exports.certnew = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (CertNewRequest)
  **/
  var argList = [
    { prop: "alias" },
    { prop: "title" },
    { prop: "private" },
    { prop: "public" },
    { prop: "safesearch", defaultValue: "Yes" },
    { prop: "category", defaultValue: "certificates" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Cert new:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.certNew.apply(syscoinClient, arr);
}

exports.certtransfer = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (CertTransferRequest)
  **/
  var argList = [
    { prop: "certkey" },
    { prop: "alias" },
    { prop: "viewonly", defaultValue: 0 }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Cert transfer:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.certTransfer.apply(syscoinClient, arr);
}

exports.certupdate = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (CertUpdateRequest)
  **/
  var argList = [
    { prop: "guid" },
    { prop: "alias" },
    { prop: "title" },
    { prop: "private" },
    { prop: "public" },
    { prop: "safesearch", defaultValue: "Yes" },
    { prop: "category", defaultValue: "certificates" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Cert Update:', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.certUpdate.apply(syscoinClient, arr);
}

