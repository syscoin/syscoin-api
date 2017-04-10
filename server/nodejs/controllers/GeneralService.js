'use strict';

var syscoinClient = require('../index').syscoinClient;

exports.addmultisigaddress = function(args, res, next) {
  /**
   * parameters expected in the args:
   * request (AddMultisigAddressRequest)
   **/
  syscoinClient.addMultiSigAddress(args.request.value.nrequired, args.request.value.keysobject, args.request.value.account, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Add multisig address:', result);
    res.end(JSON.stringify(result));
  });
}

exports.dumpprivkey = function(args, res, next) {
  /**
   * parameters expected in the args:
   * address (String)
   **/
  syscoinClient.dumpPrivKey(args.address.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Dump priv key', result);
    res.end(JSON.stringify(result));
  });
}

exports.dumpwallet = function(args, res, next) {
  /**
   * parameters expected in the args:
   * filename (String)
   **/
  syscoinClient.dumpWallet(args.filename.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Dump wallet ', result);
    res.end(JSON.stringify(result));
  });
}

exports.getaccount = function(args, res, next) {
  /**
   * parameters expected in the args:
   * syscoinaddress (String)
   **/
  syscoinClient.getAccount(args.syscoinaddress.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Get account ', result);
    res.end(JSON.stringify(result));
  });
}

exports.getaccountaddress = function(args, res, next) {
  /**
   * parameters expected in the args:
   * account (String)
   **/
  syscoinClient.getAccountAddress(args.account.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Get account address ', result);
    res.end(JSON.stringify(result));
  });
}

exports.getaddressesbyaccount = function(args, res, next) {
  /**
   * parameters expected in the args:
   * account (String)
   **/
  syscoinClient.getAddressesByAccount(args.account.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Get addresses by account ', result);
    res.end(JSON.stringify(result));
  });
}

exports.getbalance = function(args, res, next) {
  /**
   * parameters expected in the args:
   * account (String)
   * minconf (BigDecimal)
   * includeWatchonly (Boolean)
   **/

  if(!args.minconf.value) {
    args.minconf.value = 0;
  }

  if(!args.includeWatchonly.value) {
    args.includeWatchonly.value = false;
  }

  syscoinClient.getBalance(args.account.value, args.minconf.value, args.includeWatchonly.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Get balance ', result);
    res.end(JSON.stringify(result));
  });
}

exports.getinfo = function(args, res, next) {
  syscoinClient.getInfo(function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Info:', result);
    res.end(JSON.stringify(result));
  });
}

exports.getmininginfo = function(args, res, next) {
  syscoinClient.getMiningInfo(function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Get mining info ', result);
    res.end(JSON.stringify(result));
  });
}

exports.getnewaddress = function(args, res, next) {
  /**
   * parameters expected in the args:
   * request (GetNewAddressRequest)
   **/
  syscoinClient.getNewAddress(args.request.value.account, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Get new address ', result);
    res.end(JSON.stringify(result));
  });
}

exports.getpeerinfo = function(args, res, next) {
  /**
   * parameters expected in the args:
   **/
  var examples = {};
  syscoinClient.getPeerInfo(function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Get peer info', result);
    res.end(JSON.stringify(result));
  });
}

exports.getreceivedbyaccount = function(args, res, next) {
  /**
   * parameters expected in the args:
   * account (String)
   * minconf (BigDecimal)
   **/
  syscoinClient.getReceivedByAccount(args.account.value, args.minconf.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Get recieved by account', result);
    res.end(JSON.stringify(result));
  });
}

exports.getreceivedbyaddress = function(args, res, next) {
  /**
   * parameters expected in the args:
   * syscoinaddress (String)
   * minconf (BigDecimal)
   **/

  if(!args.minconf.value) {
    args.minconf.value = 0;
  }

  syscoinClient.getReceivedByAddress(args.syscoinaddress.value, args.minconf.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Get recieved by address ', result);
    res.end(JSON.stringify(result));
  });
}

exports.gettransaction = function(args, res, next) {
  /**
   * parameters expected in the args:
   * txid (String)
   * includeWatchonly (Boolean)
   **/
  syscoinClient.getTransaction(args.txid.value, args.includeWatchonly.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Get transaction ', result);
    res.end(JSON.stringify(result));
  });
}

exports.getunconfirmedbalance = function(args, res, next) {
  /**
   * parameters expected in the args:
   **/
  syscoinClient.getUnconfirmedBalance(function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Get unconfirmed balance ', result);
    res.end(JSON.stringify(result));
  });
}

exports.getv2address = function(args, res, next) {
  /**
   * parameters expected in the args:
   * account (String)
   **/
  syscoinClient.getv2address(args.account.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Get v2 address ', result);
    res.end(JSON.stringify(result));
  });
}

exports.getwalletinfo = function(args, res, next) {
  /**
   * parameters expected in the args:
   **/
  syscoinClient.getWalletInfo(function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Get wallet info ', result);
    res.end(JSON.stringify(result));
  });
}

exports.getzaddress = function(args, res, next) {
  /**
   * parameters expected in the args:
   * address (String)
   **/
  syscoinClient.getZAddress(args.address.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Get Z Address', result);
    res.end(JSON.stringify(result));
  });
}

exports.importaddress = function(args, res, next) {
  /**
   * parameters expected in the args:
   * request (ImportAddressRequest)
   **/
  syscoinClient.importAddress(args.script.value, args.label.value, args.rescan.value, args.p2sh.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Import address ', result);
    res.end(JSON.stringify(result));
  });
}

exports.importprivkey = function(args, res, next) {
  /**
   * parameters expected in the args:
   * request (ImportPrivKeyRequest)
   **/
  syscoinClient.importPrivKey(args.syscoinprivkey.value, args.label.value, args.rescan.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Import priv key ', result);
    res.end(JSON.stringify(result));
  });
}

exports.importprunedfunds = function(args, res, next) {
  /**
   * parameters expected in the args:
   * rawtransaction (String)
   * txoutproof (String)
   **/
  syscoinClient.importPrunedFunds(args.rawtransaction.value, args.txoutproof.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Import pruned funds ', result);
    res.end(JSON.stringify(result));
  });
}

exports.importpubkey = function(args, res, next) {
  /**
   * parameters expected in the args:
   * request (ImportPubKeyRequest)
   **/
  syscoinClient.importPubKey(args.pubkey.value, args.label.value, args.rescan.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Import pub key ', result);
    res.end(JSON.stringify(result));
  });
}

exports.importwallet = function(args, res, next) {
  /**
   * parameters expected in the args:
   * request (ImportWalletRequest)
   **/
  syscoinClient.importWallet(args.filename.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Import wallet ', result);
    res.end(JSON.stringify(result));
  });
}

exports.listaccounts = function(args, res, next) {
  /**
   * parameters expected in the args:
   * minconf (BigDecimal)
   * includeWatchonly (Boolean)
   **/
  syscoinClient.listAccounts(args.minconf.value, args.includeWatchonly.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('List accounts ', result);
    res.end(JSON.stringify(result));
  });
}

exports.listaddressgroupings = function(args, res, next) {
  /**
   * parameters expected in the args:
   **/
  syscoinClient.listAddressGroupings(function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('List address groupings ', result);
    res.end(JSON.stringify(result));
  });
}

exports.listreceivedbyaccount = function(args, res, next) {
  /**
   * parameters expected in the args:
   * minconf (BigDecimal)
   * includeempty (Boolean)
   * includeWatchonly (Boolean)
   **/
  syscoinClient.listReceivedByAccount(args.minconf.value, args.includeempty.value, args.includeWatchonly.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('List received by account ', result);
    res.end(JSON.stringify(result));
  });
}

exports.listreceivedbyaddress = function(args, res, next) {
  /**
   * parameters expected in the args:
   * minconf (BigDecimal)
   * includeempty (Boolean)
   * includeWatchonly (Boolean)
   **/
  syscoinClient.listReceivedByAddress(args.minconf.value, args.includeempty.value, args.includeWatchonly.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('List received by address ', result);
    res.end(JSON.stringify(result));
  });
}

exports.listsinceblock = function(args, res, next) {
  /**
   * parameters expected in the args:
   * blockhash (String)
   * includeWatchonly (Boolean)
   * targetConfirmations (BigDecimal)
   **/
  syscoinClient.listSinceBlock(args.blockchain.value, args.includeWatchonly.value, args.targetConfirmations.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('List since block', result);
    res.end(JSON.stringify(result));
  });
}

exports.listtransactions = function(args, res, next) {
  /**
   * parameters expected in the args:
   * account (String)
   * count (BigDecimal)
   * from (BigDecimal)
   * includeWatchonly (Boolean)
   **/
  syscoinClient.listTransactions(args.account.value, args.count.value, args.from.value, args.includeWatchonly.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('List transactions ', result);
    res.end(JSON.stringify(result));
  });
}

exports.move = function(args, res, next) {
  /**
   * parameters expected in the args:
   * request (MoveRequest)
   **/
  syscoinClient.move(args.request.value.fromaccount, args.request.value.toaccount, args.request.value.amount, args.request.value.minconf, args.request.value.comment, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Move ', result);
    res.end(JSON.stringify(result));
  });
}

exports.removeprunedfunds = function(args, res, next) {
  /**
   * parameters expected in the args:
   * txid (String)
   **/
  syscoinClient.removePrunedFunds(args.txid.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Remove pruned funds ', result);
    res.end(JSON.stringify(result));
  });
}

exports.sendfrom = function(args, res, next) {
  /**
   * parameters expected in the args:
   * request (SendFromRequest)
   **/
  syscoinClient.sendFrom(args.request.value.fromaccount, args.request.value.tosyscoinaddress, args.request.value.amount, args.request.value.minconf, args.request.value.comment, args.request.value.commentto, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Send from ', result);
    res.end(JSON.stringify(result));
  });
}

exports.sendmany = function(args, res, next) {
  /**
   * parameters expected in the args:
   * request (SendManyRequest)
   **/
  syscoinClient.sendMany(args.request.value.fromaccount, args.request.value.amounts, args.request.value.minconf, args.request.value.comment, args.request.value.subtractfeefromamount, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Send many ', result);
    res.end(JSON.stringify(result));
  });
}

exports.sendtoaddress = function(args, res, next) {
  /**
   * parameters expected in the args:
   * request (SendToAddressRequest)
   **/
  syscoinClient.sendToAddress(args.request.value.syscoinaddress, args.request.value.amount, args.request.value.comment, args.request.value.commentto, args.request.value.subtractfeefromamount, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Send to address ', result);
    res.end(JSON.stringify(result));
  });
}

exports.signmessage = function(args, res, next) {
  /**
   * parameters expected in the args:
   * request (SignMessageRequest)
   **/
  syscoinClient.signMessage(args.request.value.syscoinaddress, args.request.value.message, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Sign message ', result);
    res.end(JSON.stringify(result));
  });
}

exports.syscoindecoderawtransaction = function(args, res, next) {
  /**
   * parameters expected in the args:
   * alias (String)
   * hexstring (String)
   **/
  syscoinClient.syscoinDecodeRawTransaction(args.alias.value, args.hexstring.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Syscoin decode raw transaction ', result);
    res.end(JSON.stringify(result));
  });
}

exports.syscoinsignrawtransaction = function(args, res, next) {
  /**
   * parameters expected in the args:
   * hexstring (String)
   **/
  syscoinClient.syscoinSignRawTransaction(args.hexstring.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Syscoin sign raw transaction ', result);
    res.end(JSON.stringify(result));
  });
}

exports.validateaddress = function(args, res, next) {
  /**
   * parameters expected in the args:
   * syscoinaddress (String)
   **/
  syscoinClient.validateAddress(args.syscoinaddress.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Validate address ', result);
    res.end(JSON.stringify(result));
  });
}

exports.verifymessage = function(args, res, next) {
  /**
   * parameters expected in the args:
   * syscoinaddress (String)
   * signature (String)
   * message (String)
   **/
  syscoinClient.verifyMessage(args.syscoinaddress.value, args.signature.value, args.message.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Verify message ', result);
    res.end(JSON.stringify(result));
  });
}

exports.walletlock = function(args, res, next) {
  /**
   * parameters expected in the args:
   **/
  syscoinClient.walletLock(function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Wallet lock ', result);
    res.end(JSON.stringify(result));
  });
}

exports.walletpassphrase = function(args, res, next) {
  /**
   * parameters expected in the args:
   * request (WalletPassphraseRequest)
   **/
  syscoinClient.walletPassphrase(args.request.value.passphrase, args.request.value.timeout, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Wallet passphrase ', result);
    res.end(JSON.stringify(result));
  });
}

exports.walletpassphrasechange = function(args, res, next) {
  /**
   * parameters expected in the args:
   * request (WalletPassphraseChangeRequest)
   **/
  syscoinClient.walletPassphraseChange(args.request.value.oldpassphrase, args.request.value.newpassphrase, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Wallet passphrase change ', result);
    res.end(JSON.stringify(result));
  });
}

