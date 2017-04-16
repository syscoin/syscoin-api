'use strict';

var syscoinClient = require('../index').syscoinClient;
var varUtils = require('./util/varUtils');

exports.certfilter = function(args, res, next) {
  /**
   * parameters expected in the args:
  * regexp (String)
  * from (String)
  * certfilter (String)
  * safesearch (String)
  * category (String)
  **/
  var argList = ["regexp", "from", "certfilter", "safesearch", "category"];
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
  var argList = ["certname"];
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
  var argList = ["guid"];
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
  var argList = ["aliases", "cert", "privatekey"];
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
  var argList = ["alias", "title", "private", "public", "safesearch", "category"];
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
  var argList = ["certkey", "alias", "viewonly"];
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
  var argList = ["guid", "alias", "title", "private", "public", "safesearch", "category"];
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

