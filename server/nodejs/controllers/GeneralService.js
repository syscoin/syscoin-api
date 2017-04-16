'use strict';

var syscoinClient = require('../index').syscoinClient;
var varUtils = require('./util/varUtils');

exports.addmultisigaddress = function(args, res, next) {
  /**
   * parameters expected in the args:
   * request (AddMultisigAddressRequest)
   **/
  var argList = ["nrequired", "keysobject", "account"];

  //correct type issues
  if(varUtils.notNullOrUndefined(args.request.value.nrequired))
    args.request.value.nrequired = args.request.value.nrequired.toString(); //number to string

  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Add multisig address:', result);
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
  var argList = ["address"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Dump priv key', result);
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
  var argList = ["filename"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Dump wallet ', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.dumpWallet.apply(syscoinClient, arr);
}

exports.getaccount = function(args, res, next) {
  /**
   * parameters expected in the args:
   * syscoinaddress (String)
   **/
  var argList = ["syscoinaddress"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Get account ', result);
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
  var argList = ["account"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Get account address ', result);
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
  var argList = ["account"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Get addresses by account ', result);
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
  var argList = ["account", "minconf", "includeWatchonly"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Get balance ', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getBalance.apply(syscoinClient, arr);
}

exports.getinfo = function(args, res, next) {
  var argList = [];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Info:', result);
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
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Get mining info ', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getMiningInfo.apply(syscoinClient, arr);
}

exports.getnewaddress = function(args, res, next) {
  /**
   * parameters expected in the args:
   * request (GetNewAddressRequest)
   **/
  var argList = ["account"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Get new address ', result);
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
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Get peer info', result);
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
  var argList = ["account", "minconf"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Get recieved by account', result);
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
  var argList = ["syscoinaddress", "minconf"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Get recieved by address ', result);
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
  var argList = ["txid", "includeWatchonly"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Get transaction ', result);
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
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Get unconfirmed balance ', result);
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
  var argList = ["account"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Get v2 address ', result);
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
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Get wallet info ', result);
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
  var argList = ["address"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Get Z Address', result);
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
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Import address ', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.importAddress.apply(syscoinClient, arr);
}

exports.importprivkey = function(args, res, next) {
  /**
   * parameters expected in the args:
   * request (ImportPrivKeyRequest)
   **/
  var argList = ["syscoinprivkey", "label", "rescan"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Import priv key ', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.importPrivKey.apply(syscoinClient, arr);
}

exports.importprunedfunds = function(args, res, next) {
  /**
   * parameters expected in the args:
   * rawtransaction (String)
   * txoutproof (String)
   **/
  var argList = ["rawtransaction", "txoutproof"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Import pruned funds ', result);
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
  var argList = ["pubkey", "label", "rescan"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Import pub key ', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.importPubKey.apply(syscoinClient, arr);
}

exports.importwallet = function(args, res, next) {
  /**
   * parameters expected in the args:
   * request (ImportWalletRequest)
   **/
  var argList = ["filename"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Import wallet ', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.importWallet.apply(syscoinClient, arr);
}

exports.listaccounts = function(args, res, next) {
  /**
   * parameters expected in the args:
   * minconf (BigDecimal)
   * includeWatchonly (Boolean)
   **/
  var argList = ["minconf", "includeWatchonly"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('List accounts ', result);
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
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('List address groupings ', result);
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
  var argList = ["minconf", "includeempty", "includeWatchonly"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('List received by account ', result);
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
  var argList = ["minconf", "includeempty", "includeWatchonly"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('List received by address ', result);
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
  var argList = ["blockhash", "includeWatchonly", "targetConfirmations"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('List since block', result);
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
  var argList = ["account", "count", "from", "includeWatchonly"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('List transactions ', result);
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
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Move ', result);
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
  var argList = ["txid"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Remove pruned funds ', result);
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
  var argList = ["fromaccount", "tosyscoinaddress", "amount", "minconf", "comment", "commentto"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Send from ', result);
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
  var argList = ["fromaccount", "amounts", "minconf", "comment", "subtractfeefromamount"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Send many ', result);
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
  var argList = ["syscoinaddress", "amount", "comment", "commentto", "subtractfeefromamount"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Send to address ', result);
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
  var argList = ["syscoinaddress", "message"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Sign message ', result);
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
  var argList = ["alias", "hexstring"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Syscoin decode raw transaction ', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.syscoinDecodeRawTransaction.apply(syscoinClient, arr);
}

exports.syscoinsignrawtransaction = function(args, res, next) {
  /**
   * parameters expected in the args:
   * hexstring (String)
   **/
  var argList = ["hexstring"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Syscoin sign raw transaction ', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.syscoinSignRawTransaction.apply(syscoinClient, arr);
}

exports.validateaddress = function(args, res, next) {
  /**
   * parameters expected in the args:
   * syscoinaddress (String)
   **/
  var argList = ["syscoinaddress"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Validate address ', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.validateAddress.apply(syscoinClient, arr);
}

exports.verifymessage = function(args, res, next) {
  /**
   * parameters expected in the args:
   * syscoinaddress (String)
   * signature (String)
   * message (String)
   **/
  var argList = ["syscoinaddress", "signature", "message"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Verify message ', result);
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
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Wallet lock ', result);
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
  var argList = ["passphrase", "timeout"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Wallet passphrase ', result);
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
  var argList = ["oldpassphrase", "newpassphrase"];
  var cb = function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Wallet passphrase change ', result);
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.walletPassphraseChange.apply(syscoinClient, arr);
}

