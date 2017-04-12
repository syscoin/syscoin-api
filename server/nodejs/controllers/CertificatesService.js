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

  var defaultArgs = {
    regexp: "",
    from: "",
    certfilter: "",
    safesearch: "Yes",
    category: ""
  };
  args = varUtils.setDefaultArgs(defaultArgs, args);

  syscoinClient.certFilter(args.regexp.value, args.from.value, args.certfilter.value, args.safesearch.value, args.category.value, function(err, result, resHeaders) {
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

    console.log('Cert history:', result);
    res.end(JSON.stringify(result));
  });
}

exports.certinfo = function(args, res, next) {
  /**
   * parameters expected in the args:
  * guid (String)
  **/
  syscoinClient.certInfo(args.guid.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Cert info:', result);
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

  var defaultArgs = {
    aliases: [],
    cert: "",
    privatekey: ""
  };
  args = varUtils.setDefaultArgs(defaultArgs, args);

  syscoinClient.certList(args.aliases.value, args.cert.value, args.privatekey.value, function(err, result, resHeaders) {
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

  var defaultArgs = {
    safesearch: "Yes",
    category: "certificates"
  };
  args = varUtils.setDefaultArgs(defaultArgs, args, "POST");

  syscoinClient.certNew(args.request.value.alias, args.request.value.title, args.request.value.private, args.request.value.public, args.request.value.safesearch, args.request.value.category, function(err, result, resHeaders) {
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

  var defaultArgs = {
    viewonly: false
  };
  args = varUtils.setDefaultArgs(defaultArgs, args, "POST");

  syscoinClient.certTransfer(args.request.value.certkey, args.request.value.alias, args.request.value.viewonly, function(err, result, resHeaders) {
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
  var defaultArgs = {
    safesearch: "Yes",
    category: "Certificates"
  };
  args = varUtils.setDefaultArgs(defaultArgs, args, "POST");

  syscoinClient.certUpdate(args.request.value.guid, args.request.value.alias, args.request.value.title, args.request.value.private, args.request.value.public, args.request.value.safesearch, args.request.value.category, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Cert Update:', result);
    res.end(JSON.stringify(result));
  });
}

