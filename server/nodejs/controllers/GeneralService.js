var syscoinClient = require('../index').syscoinClient;
var varUtils = require('./util/varUtils');
var commonUtils = require('./util/commonUtils');
const he = require('he');

exports.addmultisigaddress = function(args, res, next) {
  /**
   * parameters expected in the args:
   * request (AddMultisigAddressRequest)
   **/
  var argList = [
    { prop: "nrequired" },
    { prop: "keysobject", defaultValue: "" },
    { prop: "account", defaultValue: "" }
  ];

  args.request.value.nrequired = varUtils.correctTypes(args.request.value.nrequired, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Add multisig address:', result, "addmultisigaddress");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.addMultiSigAddress.apply(syscoinClient, arr);
}

exports.dumpprivkey = function(args, res, next) {
  /**
   * parameters expected in the args:
   * address (String)
   **/
  var argList = [
    { prop: "address" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Dump priv key', result, "dumpprivkey");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.dumpPrivKey.apply(syscoinClient, arr);
}

exports.dumpwallet = function(args, res, next) {
  /**
   * parameters expected in the args:
   * filename (String)
   **/
  var argList = [
    { prop: "filename" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Dump wallet ', result, "dumpwallet");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.dumpWallet.apply(syscoinClient, arr);
}

exports.encryptwallet = function(args, res, next) {
  /**
   * parameters expected in the args:
   * passphrase (String)
   **/
  var argList = [
    { prop: "passphrase" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Encrypt wallet ', result, "encryptwallet");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.encryptWallet.apply(syscoinClient, arr);
}

exports.generate = function(args, res, next) {
  /**
   * parameters expected in the args:
   * numBlocks (Number)
   * maxtries (Number)
   **/

  var argList = [
    { prop: "numBlocks" },
    { prop: "maxtries", defaultValue: 1000000 }
  ];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Generate ', result, "generate");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.generate.apply(syscoinClient, arr);
}

exports.generatepublickey = function(args, res, next) {
  var argList = [];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Generate public key ', result, "generatepublickey");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.generatepublickey.apply(syscoinClient, arr);
}

exports.getaccount = function(args, res, next) {
  /**
   * parameters expected in the args:
   * syscoinaddress (String)
   **/
  var argList = [
    { prop: "syscoinaddress" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Get account ', result, "getaccount");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getAccount.apply(syscoinClient, arr);
}

exports.getaccountaddress = function(args, res, next) {
  /**
   * parameters expected in the args:
   * account (String)
   **/
  var argList = [
    { prop: "account" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Get account address ', result, "getaccountaddress");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getAccountAddress.apply(syscoinClient, arr);
}

exports.getaddressesbyaccount = function(args, res, next) {
  /**
   * parameters expected in the args:
   * account (String)
   **/
  var argList = [
    { prop: "account" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Get addresses by account ', result, "getaddressesbyaccount");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getAddressesByAccount.apply(syscoinClient, arr);
}

exports.getbalance = function(args, res, next) {
  /**
   * parameters expected in the args:
   * account (String)
   * minconf (BigDecimal)
   * includeWatchonly (Boolean)
   **/
  var argList = [
    { prop: "account", defaultValue: "*" },
    { prop: "minconf", defaultValue: 0 },
    { prop: "includeWatchonly", defaultValue: false },
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Get balance ', result, "getbalance");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getBalance.apply(syscoinClient, arr);
}

exports.getwalletbalance = function(args, res, next) {
  var argList = [];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Get WALLET balance ', result, "getwalletbalance");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getWalletBalance.apply(syscoinClient, arr);
}

exports.getblock = function(args, res, next) {
  /**
   * parameters expected in the args:
   * hash (String)
   * verbose (Boolean)
   **/
  var argList = [
    { prop: "hash", },
    { prop: "verbose", defaultValue: true }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Get block ', result, "getblock");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getBlock.apply(syscoinClient, arr);
}

exports.getblockchaininfo = function(args, res, next) {
  /**
   * parameters expected in the args:
   **/
  var argList = [];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Get blockchain info ', result, "getblockchaininfo");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getBlockchainInfo.apply(syscoinClient, arr);
}

exports.getblockcount = function(args, res, next) {
  /**
   * parameters expected in the args:
   **/
  var argList = [];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Get block count ', result, "getblockcount");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getBlockCount.apply(syscoinClient, arr);
}

exports.getinfo = function(args, res, next) {
  var argList = [];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Info:', result, "getinfo");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getInfo.apply(syscoinClient, arr);
}

exports.getmininginfo = function(args, res, next) {
  var argList = [];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Get mining info ', result, "getmininginfo");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getMiningInfo.apply(syscoinClient, arr);
}

exports.getnetworkinfo = function(args, res, next) {
  var argList = [];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Get network info ', result, "getnetworkinfo");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getNetworkInfo.apply(syscoinClient, arr);
}

exports.getnewaddress = function(args, res, next) {
  /**
   * parameters expected in the args:
   * request (GetNewAddressRequest)
   **/
  var argList = [
    { prop: "account" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Get new address ', result, "getnewaddress");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.getNewAddress.apply(syscoinClient, arr);
}

exports.getpeerinfo = function(args, res, next) {
  var argList = [];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Get peer info', result, "getpeerinfo");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getPeerInfo.apply(syscoinClient, arr);
}

exports.getreceivedbyaccount = function(args, res, next) {
  /**
   * parameters expected in the args:
   * account (String)
   * minconf (BigDecimal)
   **/
  var argList = [
    { prop: "account" },
    { prop: "minconf", defaultValue: 0 }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Get recieved by account', result, "getreceivedbyaccount");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getReceivedByAccount.apply(syscoinClient, arr);
}

exports.getreceivedbyaddress = function(args, res, next) {
  /**
   * parameters expected in the args:
   * syscoinaddress (String)
   * minconf (BigDecimal)
   **/
  var argList = [
    { prop: "syscoinaddress" },
    { prop: "minconf", defaultValue: 0 }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Get recieved by address ', result, "getreceivedbyaddress");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getReceivedByAddress.apply(syscoinClient, arr);
}

exports.gettransaction = function(args, res, next) {
  /**
   * parameters expected in the args:
   * txid (String)
   * includeWatchonly (Boolean)
   **/
  var argList = [
    { prop: "txid" },
    { prop: "includeWatchonly", defaultValue: false },
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      //TODO: fix after b1
      return res.end(JSON.stringify(err.toString()));
      //return commonUtils.reportError(res, err);
    }

    commonUtils.log('Get transaction ', result, "gettransaction");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getTransaction.apply(syscoinClient, arr);
}

exports.getunconfirmedbalance = function(args, res, next) {
  var argList = [];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Get unconfirmed balance ', result, "getunconfirmedbalance");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getUnconfirmedBalance.apply(syscoinClient, arr);
}

exports.getv2address = function(args, res, next) {
  /**
   * parameters expected in the args:
   * account (String)
   **/
  var argList = [
    { prop: "account" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Get v2 address ', result, "getv2address");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getv2address.apply(syscoinClient, arr);
}

exports.getwalletinfo = function(args, res, next) {
  var argList = [];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Get wallet info ', result, "getwalletinfo");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getWalletInfo.apply(syscoinClient, arr);
}

exports.getzaddress = function(args, res, next) {
  /**
   * parameters expected in the args:
   * address (String)
   **/
  var argList = [
    { prop: "address" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Get Z Address', result, "getzaddress");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getZAddress.apply(syscoinClient, arr);
}

exports.importaddress = function(args, res, next) {
  /**
   * parameters expected in the args:
   * request (ImportAddressRequest)
   **/
  var argList = ["script", "label", "rescan", "p2sh"];
  var argList = [
    { prop: "script" },
    { prop: "label", defaultValue: "" },
    { prop: "rescan", defaultValue: true },
    { prop: "p2sh", defaultValue: false }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Import address ', result, "importaddress");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.importAddress.apply(syscoinClient, arr);
}

exports.importprivkey = function(args, res, next) {
  /**
   * parameters expected in the args:
   * request (ImportPrivKeyRequest)
   **/
  var argList = ["syscoinprivkey", "label", "rescan"];
  var argList = [
    { prop: "syscoinprivkey" },
    { prop: "label", defaultValue: "" },
    { prop: "rescan", defaultValue: true }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Import priv key ', result, "importprivkey");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.importPrivKey.apply(syscoinClient, arr);
}

exports.importprunedfunds = function(args, res, next) {
  /**
   * parameters expected in the args:
   * rawtransaction (String)
   * txoutproof (String)
   **/
  var argList = [
    { prop: "rawtransaction" },
    { prop: "txoutproof" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Import pruned funds ', result, "importprunedfunds");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.importPrunedFunds.apply(syscoinClient, arr);
}

exports.importpubkey = function(args, res, next) {
  /**
   * parameters expected in the args:
   * request (ImportPubKeyRequest)
   **/
  var argList = [
    { prop: "pubkey" },
    { prop: "label", defaultValue: "" },
    { prop: "rescan", defaultValue: true }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Import pub key ', result, "importpubkey");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.importPubKey.apply(syscoinClient, arr);
}

exports.importwallet = function(args, res, next) {
  /**
   * parameters expected in the args:
   * request (ImportWalletRequest)
   **/
  var argList = [
    { prop: "filename" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Import wallet ', result, "importwallet");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.importWallet.apply(syscoinClient, arr);
}

exports.listaccounts = function(args, res, next) {
  /**
   * parameters expected in the args:
   * minconf (BigDecimal)
   * includeWatchonly (Boolean)
   **/
  var argList = [
    { prop: "minconf", defaultValue: 0 },
    { prop: "includeWatchonly", defaultValue: false }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('List accounts ', result, "listaccounts");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.listAccounts.apply(syscoinClient, arr);
}

exports.listaddressgroupings = function(args, res, next) {
  var argList = [];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('List address groupings ', result, "listaddressgroupings");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.listAddressGroupings.apply(syscoinClient, arr);
}

exports.listreceivedbyaccount = function(args, res, next) {
  /**
   * parameters expected in the args:
   * minconf (BigDecimal)
   * includeempty (Boolean)
   * includeWatchonly (Boolean)
   **/
  var argList = [
    { prop: "minconf", defaultValue: 0 },
    { prop: "includeempty", defaultValue: false },
    { prop: "includeWatchonly", defaultValue: false }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('List received by account ', result, "listreceivedbyaccount");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.listReceivedByAccount.apply(syscoinClient, arr);
}

exports.listreceivedbyaddress = function(args, res, next) {
  /**
   * parameters expected in the args:
   * minconf (BigDecimal)
   * includeempty (Boolean)
   * includeWatchonly (Boolean)
   **/
  var argList = [
    { prop: "minconf", defaultValue: 0 },
    { prop: "includeempty", defaultValue: false },
    { prop: "includeWatchonly", defaultValue: false }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('List received by address ', result, "listreceivedbyaddress");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.listReceivedByAddress.apply(syscoinClient, arr);
}

exports.listsinceblock = function(args, res, next) {
  /**
   * parameters expected in the args:
   * blockhash (String)
   * includeWatchonly (Boolean)
   * targetConfirmations (BigDecimal)
   **/
  var argList = [
    { prop: "blockhash", defaultValue: "" },
    { prop: "targetConfirmations", defaultValue: 1 },
    { prop: "includeWatchonly", defaultValue: false }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('List since block', result, "listsinceblock");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.listSinceBlock.apply(syscoinClient, arr);
}

exports.listtransactions = function(args, res, next) {
  /**
   * parameters expected in the args:
   * account (String)
   * count (BigDecimal)
   * from (BigDecimal)
   * includeWatchonly (Boolean)
   **/
  var argList = [
    { prop: "account", defaultValue: "*" },
    { prop: "count", defaultValue: 10 },
    { prop: "from", defaultValue: 0 },
    { prop: "includeWatchonly", defaultValue: false }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('List transactions ', result, "listtransactions");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.listTransactions.apply(syscoinClient, arr);
}

exports.move = function(args, res, next) {
  /**
   * parameters expected in the args:
   * request (MoveRequest)
   **/
  var argList = ["fromaccount", "toaccount", "amount", "minconf", "comment"];
  var argList = [
    { prop: "fromaccount" },
    { prop: "toaccount" },
    { prop: "amount" },
    { prop: "minconf", defaultValue: 1 },
    { prop: "comment", defaultValue: "" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Move ', result, "move");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.move.apply(syscoinClient, arr);
}

exports.removeprunedfunds = function(args, res, next) {
  /**
   * parameters expected in the args:
   * txid (String)
   **/
  var argList = [
    { prop: "txid" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Remove pruned funds ', result, "removeprunedfunds");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.removePrunedFunds.apply(syscoinClient, arr);
}

exports.sendfrom = function(args, res, next) {
  /**
   * parameters expected in the args:
   * request (SendFromRequest)
   **/
  var argList = [
    { prop: "fromaccount" },
    { prop: "tosyscoinaddress" },
    { prop: "amount" },
    { prop: "minconf", defaultValue: 1 },
    { prop: "comment", defaultValue: "" },
    { prop: "commentto", defaultValue: ""}
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Send from ', result, "sendfrom");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.sendFrom.apply(syscoinClient, arr);
}

exports.sendmany = function(args, res, next) {
  /**
   * parameters expected in the args:
   * request (SendManyRequest)
   **/
  var argList = [
    { prop: "fromaccount" },
    { prop: "amounts" },
    { prop: "minconf", defaultValue: 1 },
    { prop: "comment", defaultValue: "" },
    { prop: "subtractfeefromamount", defaultValue: [] }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Send many ', result, "sendmany");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.sendMany.apply(syscoinClient, arr);
}

exports.sendtoaddress = function(args, res, next) {
  /**
   * parameters expected in the args:
   * request (SendToAddressRequest)
   **/
  var argList = [
    { prop: "syscoinaddress" },
    { prop: "amount" },
    { prop: "comment", defaultValue: "" },
    { prop: "commentto", defaultValue: "" },
    { prop: "subtractfeefromamount", defaultValue: false }
  ];

  args.request.value.amount = varUtils.correctTypes(args.request.value.amount, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Send to address ', result, "sendtoaddress");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.sendToAddress.apply(syscoinClient, arr);
}

exports.signmessage = function(args, res, next) {
  /**
   * parameters expected in the args:
   * request (SignMessageRequest)
   **/
  var argList = [
    { prop: "syscoinaddress" },
    { prop: "message" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Sign message ', result, "signmessage");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.signMessage.apply(syscoinClient, arr);
}

exports.syscoindecoderawtransaction = function(args, res, next) {
  /**
   * parameters expected in the args:
   * alias (String)
   * hexstring (String)
   **/
  var argList = [
    { prop: "alias" },
    { prop: "hexstring" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Syscoin decode raw transaction ', result, "syscoindecoderawtransaction");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.syscoinDecodeRawTransaction.apply(syscoinClient, arr);
}

exports.syscoinsignrawtransaction = function(args, res, next) {
  /**
   * parameters expected in the args:
   * hexstring (String)
   **/
  var argList = [
    { prop: "hexstring" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Syscoin sign raw transaction ', result, "syscoinsignrawtransaction");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.syscoinSignRawTransaction.apply(syscoinClient, arr);
}

exports.validateaddress = function(args, res, next) {
  /**
   * parameters expected in the args:
   * syscoinaddress (String)
   **/
  var argList = [
    { prop: "syscoinaddress" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Validate address ', result, "validateaddress");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.validateAddress.apply(syscoinClient, arr);
}

exports.verifymessage = function(args, res, next) {
  /**
   * parameters expected in the args:
   * syscoinaddress (String)
   * signature (String)
   * message (String)
   **/
  var argList = [
    { prop: "syscoinaddress" },
    { prop: "signature" },
    { prop: "message" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Verify message ', result, "verifymessage");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.verifyMessage.apply(syscoinClient, arr);
}

exports.walletlock = function(args, res, next) {
  var argList = [];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Wallet lock ', result, "walletlock");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.walletLock.apply(syscoinClient, arr);
}

exports.walletpassphrase = function(args, res, next) {
  /**
   * parameters expected in the args:
   * request (WalletPassphraseRequest)
   **/
  var argList = [
    { prop: "passphrase" },
    { prop: "timeout" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Wallet passphrase ', result, "walletpassphrase");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.walletPassphrase.apply(syscoinClient, arr);
}

exports.walletpassphrasechange = function(args, res, next) {
  /**
   * parameters expected in the args:
   * request (WalletPassphraseChangeRequest)
   **/
  var argList = [
    { prop: "oldpassphrase" },
    { prop: "newpassphrase" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Wallet passphrase change ', result, "walletpassphrasechange");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.walletPassphraseChange.apply(syscoinClient, arr);
}

exports.getaddresstxids = function(args, res, next) {
  /**
   * parameters expected in the args:
   * addresses (Array)
   * start (Number)
   * end (Number)
   **/
  var argList = [
    { prop: "addresses" },
    { prop: "start" },
    { prop: "end" }
  ];
  console.log("vohoooo again")

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Get address transaction id ', result, "getaddresstxids");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getAddressTxids.apply(syscoinClient, arr);
}

exports.getaddressutxos = function(args, res, next) {
  /**
   * parameters expected in the args:
   * addresses (Array)
   **/
  var argList = [
    { prop: "addresses" }
  ];

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Returns all unspent outputs for an address (requires addressindex to be enabled) ', result, "getaddressutxos");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);

  console.log("vohoooo again", arr)

  syscoinClient.getAddressUtxos.apply(syscoinClient, arr);
}

exports.getblockhashes  = function(args, res, next) {
  /**
   * parameters expected in the args:
   * high (Number)
   * low (Number)
   **/
  var argList = [
    { prop: "high" },
    { prop: "low" },
  ];
  console.log("vohoooo again")

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Get address transaction id ', result, "getblockhashes ");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getBlockHashes.apply(syscoinClient, arr);
}
// TODO: this need to be updated in root folder swagger.yaml
exports.getblockheaders  = function(args, res, next) {
  /**
   * parameters expected in the args:
   * hash (String)
   * count (Number)
   * verbose (Boolean)
   **/
  var argList = [
    { prop: "hash" },
    { prop: "count" },
    { prop: "verbose" }
  ];
  console.log("vohoooo again")

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Get address transaction id ', result, "getblockheaders ");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getBlockHeaders.apply(syscoinClient, arr);
}

exports.getchaintips  = function(args, res, next) {
  var argList = [];
  console.log("vohoooo again")

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Get address transaction id ', result, "getchaintips ");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getChainTips.apply(syscoinClient, arr);
}

exports.getspentinfo = function(args, res, next) {
  /**
   * parameters expected in the args:
   * txid (String)
   * index (Number)
   **/
  var argList = [
    { prop: "txid" },
    { prop: "index" }
  ];
  console.log("vohoooo again")

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Get address transaction id ', result, "getspentinfo");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getSpentInfo.apply(syscoinClient, arr);
}

exports.getgovernanceinfo = function(args, res, next) {
  var argList = [];
  console.log("vohoooo again")

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Get address transaction id ', result, "getgovernanceinfo");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getGovernanceInfo.apply(syscoinClient, arr);
}

exports.getpoolinfo = function(args, res, next) {
  var argList = [];
  console.log("vohoooo again")

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Get address transaction id ', result, "getpoolinfo");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getPoolInfo.apply(syscoinClient, arr);
}

exports.getsuperblockbudget  = function(args, res, next) {
  /**
   * parameters expected in the args:
   * index (number)
   **/
  var argList = [
    { prop: "index" }
  ];
  console.log("vohoooo again")

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Get address transaction id ', result, "getsuperblockbudget ");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getSuperBlockBudget.apply(syscoinClient, arr);
}

exports.gobject  = function(args, res, next) {
  /**
   * parameters expected in the args:
   * command (String)
   **/
  var argList = [
    { prop: "command" }
  ];
  console.log("vohoooo again")

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Manage governance objects', result, "gobject");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.gObject.apply(syscoinClient, arr);
}

exports.masternode = function(args, res, next) {
  /**
   * parameters expected in the args:
   * command (String)
   **/
  var argList = [
    { prop: "command" },
  ];
  console.log("vohoooo again")

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Set of commands to execute masternode related actions.', result, "masternode");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.masternode.apply(syscoinClient, arr);
}

exports.masternodebroadcast = function(args, res, next) {
  /**
   * parameters expected in the args:
   * command (String)
   **/
  var argList = [
    { prop: "command" }
  ];
  console.log("vohoooo again")

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Get address transaction id ', result, "masternodebroadcast");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.masternodeBroadcast.apply(syscoinClient, arr);
}

exports.masternodelist = function(args, res, next) {
  /**
   * parameters expected in the args:
   * mode (String)
   **/
  var argList = [
    { prop: "mode" },
  ];
  console.log("vohoooo again")

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Get address transaction id ', result, "masternodelist");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.masternodeList.apply(syscoinClient, arr);
}

