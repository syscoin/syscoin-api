'use strict';

exports.offeraccept = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferAcceptRequest)
  **/
    var examples = {};
  examples['application/json'] = [ "aeiou" ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.offeracceptlist = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "total" : 1.3579000000000001069366817318950779736042022705078125,
  "offer_discount_percentage" : 1.3579000000000001069366817318950779736042022705078125,
  "status" : "aeiou",
  "alias" : "aeiou",
  "offer" : "aeiou",
  "pay_message" : "aeiou",
  "currency" : "aeiou",
  "id" : "aeiou",
  "systotal" : 1.3579000000000001069366817318950779736042022705078125,
  "title" : "aeiou",
  "price" : 1.3579000000000001069366817318950779736042022705078125,
  "height" : 1.3579000000000001069366817318950779736042022705078125,
  "escrowlink" : "aeiou",
  "btctxid" : "aeiou",
  "buyer" : "aeiou",
  "quantity" : 1.3579000000000001069366817318950779736042022705078125,
  "linkofferaccept" : "aeiou",
  "ismine" : true
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.offeraddwhitelist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferAddWhitelistRequest)
  **/
    var examples = {};
  examples['application/json'] = [ "aeiou" ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.offerclearwhitelist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferClearWhitelistRequest)
  **/
    var examples = {};
  examples['application/json'] = [ "aeiou" ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.offerfilter = function(args, res, next) {
  /**
   * parameters expected in the args:
  * regexp (String)
  * maxage (BigDecimal)
  * from (BigDecimal)
  * nb (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "expired" : true,
  "alias" : "aeiou",
  "expires_in" : 1.3579000000000001069366817318950779736042022705078125,
  "btconly" : true,
  "offer" : "aeiou",
  "private" : true,
  "currency" : "aeiou",
  "title" : "aeiou",
  "category" : "aeiou",
  "cert" : "aeiou",
  "price" : 1.3579000000000001069366817318950779736042022705078125,
  "alias_peg" : "aeiou",
  "address" : "aeiou",
  "description" : "aeiou",
  "pending" : true,
  "exclusive_resell" : true,
  "quantity" : 1.3579000000000001069366817318950779736042022705078125,
  "expires_on" : 1.3579000000000001069366817318950779736042022705078125,
  "commission" : 1.3579000000000001069366817318950779736042022705078125
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.offerhistory = function(args, res, next) {
  /**
   * parameters expected in the args:
  * offer (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "expired" : true,
  "alias" : "aeiou",
  "expires_in" : 1.3579000000000001069366817318950779736042022705078125,
  "offer" : "aeiou",
  "currency" : "aeiou",
  "title" : "aeiou",
  "category" : "aeiou",
  "height" : true,
  "offertype" : "aeiou",
  "cert" : "aeiou",
  "price" : 1.3579000000000001069366817318950779736042022705078125,
  "description" : "aeiou",
  "txid" : "aeiou",
  "quantity" : 1.3579000000000001069366817318950779736042022705078125,
  "expires_on" : 1.3579000000000001069366817318950779736042022705078125,
  "commission" : 1.3579000000000001069366817318950779736042022705078125
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.offerinfo = function(args, res, next) {
  /**
   * parameters expected in the args:
  * guid (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "expired" : true,
  "alias\"" : "aeiou",
  "sysprice" : 1.3579000000000001069366817318950779736042022705078125,
  "offerlink" : true,
  "expires_in" : 1.3579000000000001069366817318950779736042022705078125,
  "btconly" : true,
  "currency" : "aeiou",
  "private" : true,
  "title" : "aeiou",
  "height" : 1.3579000000000001069366817318950779736042022705078125,
  "cert" : "aeiou",
  "alias_peg" : "aeiou",
  "description" : "aeiou",
  "exclusive_resell" : true,
  "quantity" : "aeiou",
  "commission" : 1.3579000000000001069366817318950779736042022705078125,
  "ismine" : true,
  "accepts" : [ {
    "total" : 1.3579000000000001069366817318950779736042022705078125,
    "offer_discount_percentage" : 1.3579000000000001069366817318950779736042022705078125,
    "status" : "aeiou",
    "alias" : "aeiou",
    "offer" : "aeiou",
    "pay_message" : "aeiou",
    "currency" : "aeiou",
    "id" : "aeiou",
    "systotal" : 1.3579000000000001069366817318950779736042022705078125,
    "title" : "aeiou",
    "price" : 1.3579000000000001069366817318950779736042022705078125,
    "height" : 1.3579000000000001069366817318950779736042022705078125,
    "escrowlink" : "aeiou",
    "btctxid" : "aeiou",
    "buyer" : "aeiou",
    "quantity" : 1.3579000000000001069366817318950779736042022705078125,
    "linkofferaccept" : "aeiou",
    "ismine" : true
  } ],
  "offer" : "aeiou",
  "offerlink_guid" : "aeiou",
  "category" : "aeiou",
  "price" : 1.3579000000000001069366817318950779736042022705078125,
  "address" : "aeiou",
  "txid" : "aeiou",
  "expired_block" : 1.3579000000000001069366817318950779736042022705078125
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.offerlink = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferLinkRequest)
  **/
    var examples = {};
  examples['application/json'] = [ "aeiou" ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.offerlist = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "expired" : true,
  "alias" : "aeiou",
  "expires_in" : 1.3579000000000001069366817318950779736042022705078125,
  "btconly" : true,
  "offer" : "aeiou",
  "private" : true,
  "currency" : "aeiou",
  "title" : "aeiou",
  "category" : "aeiou",
  "cert" : "aeiou",
  "price" : 1.3579000000000001069366817318950779736042022705078125,
  "alias_peg" : "aeiou",
  "address" : "aeiou",
  "description" : "aeiou",
  "pending" : true,
  "exclusive_resell" : true,
  "quantity" : 1.3579000000000001069366817318950779736042022705078125,
  "expires_on" : 1.3579000000000001069366817318950779736042022705078125,
  "commission" : 1.3579000000000001069366817318950779736042022705078125
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.offernew = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferNewRequest)
  **/
    var examples = {};
  examples['application/json'] = [ "aeiou" ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.offerremovewhitelist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferRemoveWhitelistRequest)
  **/
    var examples = {};
  examples['application/json'] = [ "aeiou" ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.offerscan = function(args, res, next) {
  /**
   * parameters expected in the args:
  * startOffer (String)
  * maxReturned (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = [ "aeiou" ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.offerupdate = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferUpdateRequest)
  **/
    var examples = {};
  examples['application/json'] = [ "aeiou" ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.offerwhitelist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * offerguid (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "offer_discount_percentage" : 1.3579000000000001069366817318950779736042022705078125,
  "alias" : "aeiou",
  "expiresin" : 1.3579000000000001069366817318950779736042022705078125
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

