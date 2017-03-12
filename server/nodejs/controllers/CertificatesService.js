'use strict';

var syscoinClient = require('../index').syscoinClient;

exports.certfilter = function(args, res, next) {
  /**
   * parameters expected in the args:
  * regexp (String)
  * from (String)
  * certfilter (String)
  * safesearch (String)
  * category (String)
  **/
  syscoinClient.certFilter(args.regexp.value, args.maxage.value, args.from.value, args.nb.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Cert filter:', result);
    res.end(JSON.stringify(result));
  });
}

exports.certhistory = function(args, res, next) {
  /**
   * parameters expected in the args:
  * certname (String)
  **/
  syscoinClient.certHistory(args.certname.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Alias history:', result);
    res.end(JSON.stringify(result));
  });
}

exports.certinfo = function(args, res, next) {
  /**
   * parameters expected in the args:
  * guid (String)
  **/
  syscoinClient.certInfo(args.certname.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Alias info:', result);
    res.end(JSON.stringify(result));
  });
}

exports.certlist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aliases (List)
  * cert (String)
  * privatekey (String)
  **/
  syscoinClient.certList(function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Cert list:', result);
    res.end(JSON.stringify(result));
  });
}

exports.certnew = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (CertNewRequest)
  **/
  syscoinClient.certNew(args.request.value.alias, args.request.value.title, args.request.value.data, args.request.value.private, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Cert new:', result);
    res.end(JSON.stringify(result));
  });
}

exports.certtransfer = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (CertTransferRequest)
  **/
  syscoinClient.certTransfer(args.request.value.certkey, args.request.value.alias, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Cert transfer:', result);
    res.end(JSON.stringify(result));
  });
}

exports.certupdate = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (CertUpdateRequest)
  **/
  syscoinClient.certUpdate(args.request.value.guid, args.request.value.title, args.request.value.data, args.request.value.private, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Cert Update:', result);
    res.end(JSON.stringify(result));
  });
}

