'use strict';

var syscoinClient = require('../index').syscoinClient;

exports.addmultisigaddress = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (AddMultisigAddressRequest)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.dumpprivkey = function(args, res, next) {
  /**
   * parameters expected in the args:
  * address (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.dumpwallet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * filename (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getaccount = function(args, res, next) {
  /**
   * parameters expected in the args:
  * syscoinaddress (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getaccountaddress = function(args, res, next) {
  /**
   * parameters expected in the args:
  * account (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getaddressesbyaccount = function(args, res, next) {
  /**
   * parameters expected in the args:
  * account (String)
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

exports.getbalance = function(args, res, next) {
  /**
   * parameters expected in the args:
  * account (String)
  * minconf (BigDecimal)
  * includeWatchonly (Boolean)
  **/
    var examples = {};
  examples['application/json'] = 1.3579000000000001069366817318950779736042022705078125;
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getinfo = function(args, res, next) {
  client.getInfo(function(err, info, resHeaders) {
    if (err) {
      console.log(err);
      return res.end();
    }
    console.log('Info:', info);

    //res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(info));
  });
  
}

exports.getmininginfo = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "pooledtx" : 1.3579000000000001069366817318950779736042022705078125,
  "errors" : "aeiou",
  "currentblocktx" : 1.3579000000000001069366817318950779736042022705078125,
  "generate" : true,
  "chain" : "aeiou",
  "currentblocksize" : 1.3579000000000001069366817318950779736042022705078125,
  "testnet" : true,
  "difficulty" : 1.3579000000000001069366817318950779736042022705078125,
  "genproclimit" : 1.3579000000000001069366817318950779736042022705078125,
  "blocks" : 1.3579000000000001069366817318950779736042022705078125,
  "networkhashps" : 1.3579000000000001069366817318950779736042022705078125
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getnewaddress = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (GetNewAddressRequest)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getpeerinfo = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = "";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getreceivedbyaccount = function(args, res, next) {
  /**
   * parameters expected in the args:
  * account (String)
  * minconf (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = 1.3579000000000001069366817318950779736042022705078125;
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getreceivedbyaddress = function(args, res, next) {
  /**
   * parameters expected in the args:
  * syscoinaddress (String)
  * minconf (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = 1.3579000000000001069366817318950779736042022705078125;
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.gettransaction = function(args, res, next) {
  /**
   * parameters expected in the args:
  * txid (String)
  * includeWatchonly (Boolean)
  **/
    var examples = {};
  examples['application/json'] = {
  "amount" : "aeiou",
  "blockindex" : 1.3579000000000001069366817318950779736042022705078125,
  "time" : 1.3579000000000001069366817318950779736042022705078125,
  "hex" : "aeiou",
  "details" : [ {
    "amount" : 1.3579000000000001069366817318950779736042022705078125,
    "category" : "aeiou",
    "address" : "aeiou",
    "vout" : 1.3579000000000001069366817318950779736042022705078125,
    "account" : "aeiou",
    "label" : "aeiou"
  } ],
  "confirmations" : 1.3579000000000001069366817318950779736042022705078125,
  "timereceived" : 1.3579000000000001069366817318950779736042022705078125,
  "txid" : "aeiou",
  "blockhash" : "aeiou",
  "blocktime" : 1.3579000000000001069366817318950779736042022705078125
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getunconfirmedbalance = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = 1.3579000000000001069366817318950779736042022705078125;
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getv2address = function(args, res, next) {
  /**
   * parameters expected in the args:
  * account (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getwalletinfo = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "unlocked_until" : 1.3579000000000001069366817318950779736042022705078125,
  "balance" : 1.3579000000000001069366817318950779736042022705078125,
  "paytxfee" : 1.3579000000000001069366817318950779736042022705078125,
  "unconfirmed_balance" : 1.3579000000000001069366817318950779736042022705078125,
  "txcount" : 1.3579000000000001069366817318950779736042022705078125,
  "immature_balance" : 1.3579000000000001069366817318950779736042022705078125,
  "keypoololdest" : 1.3579000000000001069366817318950779736042022705078125,
  "walletversion" : 1.3579000000000001069366817318950779736042022705078125,
  "keypoolsize" : 1.3579000000000001069366817318950779736042022705078125
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.importaddress = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (ImportAddressRequest)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.importprivkey = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (ImportPrivKeyRequest)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.importpubkey = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (ImportPubKeyRequest)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.importwallet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (ImportWalletRequest)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.listaccounts = function(args, res, next) {
  /**
   * parameters expected in the args:
  * minconf (BigDecimal)
  * includeWatchonly (Boolean)
  **/
    var examples = {};
  examples['application/json'] = "{}";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.listaddressgroupings = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ [ {
  "amount" : 1.3579000000000001069366817318950779736042022705078125,
  "account" : "aeiou",
  "syscoinaddress" : "aeiou"
} ] ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.listreceivedbyaccount = function(args, res, next) {
  /**
   * parameters expected in the args:
  * minconf (BigDecimal)
  * includeempty (Boolean)
  * includeWatchonly (Boolean)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "amount" : 1.3579000000000001069366817318950779736042022705078125,
  "involvesWatchonly" : true,
  "confirmations" : 1.3579000000000001069366817318950779736042022705078125,
  "account" : "aeiou",
  "label" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.listreceivedbyaddress = function(args, res, next) {
  /**
   * parameters expected in the args:
  * minconf (BigDecimal)
  * includeempty (Boolean)
  * includeWatchonly (Boolean)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "amount" : 1.3579000000000001069366817318950779736042022705078125,
  "involvesWatchonly" : true,
  "confirmations" : 1.3579000000000001069366817318950779736042022705078125,
  "account" : "aeiou",
  "label" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.listsinceblock = function(args, res, next) {
  /**
   * parameters expected in the args:
  * blockhash (String)
  * includeWatchonly (Boolean)
  * targetConfirmations (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "lastblock" : "aeiou",
  "transactions" : [ {
    "to" : "aeiou",
    "confirmations" : 1.3579000000000001069366817318950779736042022705078125,
    "vout" : 1.3579000000000001069366817318950779736042022705078125,
    "blockhash" : "aeiou",
    "label" : "aeiou",
    "blocktime" : 1.3579000000000001069366817318950779736042022705078125,
    "amount" : 1.3579000000000001069366817318950779736042022705078125,
    "fee" : 1.3579000000000001069366817318950779736042022705078125,
    "blockindex" : 1.3579000000000001069366817318950779736042022705078125,
    "category" : "aeiou",
    "time" : 1.3579000000000001069366817318950779736042022705078125,
    "timereceived" : 1.3579000000000001069366817318950779736042022705078125,
    "address" : "aeiou",
    "txid" : "aeiou",
    "account" : "aeiou",
    "comment" : "aeiou"
  } ]
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.listtransactions = function(args, res, next) {
  /**
   * parameters expected in the args:
  * account (String)
  * count (BigDecimal)
  * from (BigDecimal)
  * includeWatchonly (Boolean)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "trusted" : true,
  "confirmations" : 1.3579000000000001069366817318950779736042022705078125,
  "vout" : 1.3579000000000001069366817318950779736042022705078125,
  "blockhash" : "aeiou",
  "otheraccount" : "aeiou",
  "label" : "aeiou",
  "blocktime" : 1.3579000000000001069366817318950779736042022705078125,
  "amount" : 1.3579000000000001069366817318950779736042022705078125,
  "fee" : 1.3579000000000001069366817318950779736042022705078125,
  "blockindex" : "aeiou",
  "time" : 1.3579000000000001069366817318950779736042022705078125,
  "category" : "aeiou",
  "timereceived" : 1.3579000000000001069366817318950779736042022705078125,
  "address" : "aeiou",
  "txid" : "aeiou",
  "account" : "aeiou",
  "comment" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.move = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (MoveRequest)
  **/
    var examples = {};
  examples['application/json'] = true;
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.sendfrom = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (SendFromRequest)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.sendmany = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (SendManyRequest)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.sendtoaddress = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (SendToAddressRequest)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.signmessage = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (SignMessageRequest)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.validateaddress = function(args, res, next) {
  /**
   * parameters expected in the args:
  * syscoinaddress (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "address" : "aeiou",
  "iscompressed" : true,
  "iswatchonly" : true,
  "account" : "aeiou",
  "pubkey" : "aeiou",
  "isscript" : true,
  "ismine" : true,
  "isvalid" : true
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.verifymessage = function(args, res, next) {
  /**
   * parameters expected in the args:
  * syscoinaddress (String)
  * signature (String)
  * message (String)
  **/
    var examples = {};
  examples['application/json'] = true;
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.walletlock = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.walletpassphrase = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (WalletPassphraseRequest)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.walletpassphrasechange = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (WalletPassphraseChangeRequest)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

