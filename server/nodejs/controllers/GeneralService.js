const syscoinClient = require('../index').syscoinClient;
const varUtils = require('./util/varUtils');
const commonUtils = require('./util/commonUtils');
const generalServiceGetInfoUtils = require('./util/generalServiceGetInfoUtils');
const methodGenerator = require('./util/methodGenerator');

const he = require('he');

exports.addmultisigaddress = function (args, res, next) {
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

  var cb = function (err, result, resHeaders) {
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

exports.dumpprivkey = methodGenerator.generateGenericSyscoinMethod([
  { prop: "address" }
], syscoinClient.dumpPrivKey, 'dumpprivkey', 'GET');

exports.dumpwallet = function (args, res, next) {
  /**
   * parameters expected in the args:
   * filename (String)
   **/
  var argList = [
    { prop: "filename" }
  ];

  var cb = function (err, result, resHeaders) {
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

exports.encryptwallet = function (args, res, next) {
  /**
   * parameters expected in the args:
   * passphrase (String)
   **/
  var argList = [
    { prop: "passphrase" }
  ];

  var cb = function (err, result, resHeaders) {
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

//This method seems to be deprecated
exports.generate = function (args, res, next) {
  /**
   * parameters expected in the args:
   * numBlocks (Number)
   * maxtries (Number)
   **/

  var argList = [
    { prop: "numBlocks" },
    { prop: "maxtries", defaultValue: 1000000 }
  ];
  var cb = function (err, result, resHeaders) {
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

//This method seems to be deprecated
exports.generatepublickey = function (args, res, next) {
  var argList = [];
  var cb = function (err, result, resHeaders) {
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

exports.getaccount = methodGenerator.generateGenericSyscoinMethod([
  { prop: "syscoinaddress" }
], syscoinClient.getAccount, 'getaccount', 'GET');

exports.getaccountaddress = methodGenerator.generateGenericSyscoinMethod([
  { prop: "account" }
], syscoinClient.getAccountAddress, 'getaccountaddress', 'GET');

//This method seems to be deprecated
exports.getaddressesbyaccount = function (args, res, next) {
  /**
   * parameters expected in the args:
   * account (String)
   **/
  var argList = [
    { prop: "account" }
  ];

  var cb = function (err, result, resHeaders) {
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

exports.getbalance = methodGenerator.generateGenericSyscoinMethod([
  { prop: "account", defaultValue: "*" },
  { prop: "minconf", defaultValue: 1 },
  { prop: "addlockconf", defaultValue: false },
  { prop: "includeWatchonly", defaultValue: false }
], syscoinClient.getBalance, 'getbalance', 'GET');

exports.getblock = function (args, res, next) {
  /**
   * parameters expected in the args:
   * hash (String)
   * verbose (Boolean)
   **/
  var argList = [
    { prop: "hash", },
    { prop: "verbose", defaultValue: true }
  ];

  var cb = function (err, result, resHeaders) {
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

exports.getblockchaininfo = methodGenerator.generateGenericSyscoinMethod(
  [],
  syscoinClient.getBlockchainInfo, 'getblockchaininfo', 'GET');

exports.getblockcount = methodGenerator.generateGenericSyscoinMethod(
  [],
  syscoinClient.getBlockCount, 'getblockcount', 'GET');

/*
* Leave this (getInfo) method untouched for now due to additional error handling.
* TO-DO: Refactor taking the error handling into account
*/
exports.getinfo = function (args, res, next) {
  var argList = [];
  var cb = function (err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      let jsonError = commonUtils.parseError(err);
      if (generalServiceGetInfoUtils.getInfoResponseIsWalletPercentageResponse(jsonError)) {
        const walletPercentage = generalServiceGetInfoUtils.extractWalletPercentageFromGetInfoResponseMessage(jsonError.message);
        const infoObj = generalServiceGetInfoUtils.createCustomWalletPercentageInfoResponse(walletPercentage);
        commonUtils.log('Special Info:', infoObj, "getinfo");
        res.end(JSON.stringify(infoObj));
        return;
      }
      else {
        return commonUtils.reportError(res, err);
      }
    }

    commonUtils.log('Info:', result, "getinfo");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getInfo.apply(syscoinClient, arr);
}

exports.getmininginfo = methodGenerator.generateGenericSyscoinMethod(
  [],
  syscoinClient.getMiningInfo, 'getmininginfo', 'GET');

exports.getnetworkinfo = methodGenerator.generateGenericSyscoinMethod(
  [],
  syscoinClient.getNetworkInfo, 'getnetworkinfo', 'GET');

exports.getnewaddress = function (args, res, next) {
  /**
   * parameters expected in the args:
   * request (GetNewAddressRequest)
   **/
  var argList = [
    { prop: "account" }
  ];

  var cb = function (err, result, resHeaders) {
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

exports.getpeerinfo = methodGenerator.generateGenericSyscoinMethod([],
  syscoinClient.getPeerInfo, 'getpeerinfo', 'GET');

exports.getreceivedbyaccount = methodGenerator.generateGenericSyscoinMethod([
  { prop: "account" },
  { prop: "minconf", defaultValue: 1 },
  { prop: "addlockconf", defaultValue: false }
], syscoinClient.getReceivedByAccount, 'getreceivedbyaccount', 'GET');

exports.getreceivedbyaddress = methodGenerator.generateGenericSyscoinMethod([
  { prop: "syscoinaddress" },
  { prop: "minconf", defaultValue: 1 },
  { prop: "addlockconf", defaultValue: false }
], syscoinClient.getReceivedByAddress, 'getreceivedbyaddress', 'GET');

exports.gettransaction = methodGenerator.generateGenericSyscoinMethod([
  { prop: "txid" },
  { prop: "includeWatchonly", defaultValue: false }
], syscoinClient.getTransaction, 'gettransaction', 'GET');

exports.getunconfirmedbalance = methodGenerator.generateGenericSyscoinMethod([],
  syscoinClient.getUnconfirmedBalance, 'getunconfirmedbalance', 'GET');

exports.getwalletinfo = methodGenerator.generateGenericSyscoinMethod([],
  syscoinClient.getWalletInfo, 'getwalletinfo', 'GET');

exports.importaddress = function (args, res, next) {
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

  var cb = function (err, result, resHeaders) {
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

exports.importprivkey = function (args, res, next) {
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

  var cb = function (err, result, resHeaders) {
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

exports.importpubkey = function (args, res, next) {
  /**
   * parameters expected in the args:
   * request (ImportPubKeyRequest)
   **/
  var argList = [
    { prop: "pubkey" },
    { prop: "label", defaultValue: "" },
    { prop: "rescan", defaultValue: true }
  ];

  var cb = function (err, result, resHeaders) {
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

exports.importwallet = function (args, res, next) {
  /**
   * parameters expected in the args:
   * request (ImportWalletRequest)
   **/
  var argList = [
    { prop: "filename" }
  ];

  var cb = function (err, result, resHeaders) {
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

exports.listaccounts = methodGenerator.generateGenericSyscoinMethod([
  { prop: "minconf", defaultValue: 1 },
  { prop: "addlockconf", defaultValue: false },
  { prop: "includeWatchonly", defaultValue: false }
], syscoinClient.listAccounts, 'listaccounts', 'GET');

exports.listaddressgroupings = methodGenerator.generateGenericSyscoinMethod([],
  syscoinClient.listAddressGroupings, 'listaddressgroupings', 'GET');

exports.listreceivedbyaccount = methodGenerator.generateGenericSyscoinMethod([
  { prop: "minconf", defaultValue: 0 },
  { prop: "addlockconf", defaultValue: false },
  { prop: "includeempty", defaultValue: false },
  { prop: "includeWatchonly", defaultValue: false }
], syscoinClient.listReceivedByAccount, 'listreceivedbyaccount', 'GET');

exports.listreceivedbyaddress = methodGenerator.generateGenericSyscoinMethod([
  { prop: "minconf", defaultValue: 0 },
  { prop: "addlockconf", defaultValue: false },
  { prop: "includeempty", defaultValue: false },
  { prop: "includeWatchonly", defaultValue: false }
], syscoinClient.listReceivedByAddress, 'listreceivedbyaddress', 'GET');

exports.listsinceblock = methodGenerator.generateGenericSyscoinMethod([
  { prop: "blockhash", defaultValue: "" },
  { prop: "targetConfirmations", defaultValue: 1 },
  { prop: "includeWatchonly", defaultValue: false }
], syscoinClient.listSinceBlock, 'listsinceblock', 'GET');

exports.listtransactions = methodGenerator.generateGenericSyscoinMethod([
  { prop: "account", defaultValue: "*" },
  { prop: "count", defaultValue: 10 },
  { prop: "from", defaultValue: 0 },
  { prop: "includeWatchonly", defaultValue: false }
], syscoinClient.listTransactions, 'listtransactions', 'GET');

exports.listunspent = methodGenerator.generateGenericSyscoinMethod([
  { prop: "minconf", defaultValue: 1 },
  { prop: "maxconf", defaultValue: 9999999 },
  { prop: "adresses", defaultValue: [] }
], syscoinClient.listUnspent, 'listunspent', 'GET');

exports.move = function (args, res, next) {
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

  var cb = function (err, result, resHeaders) {
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

exports.sendfrom = function (args, res, next) {
  /**
   * parameters expected in the args:
   * request (SendFromRequest)
   **/
  var argList = [
    { prop: "fromaccount" },
    { prop: "tosyscoinaddress" },
    { prop: "amount" },
    { prop: "minconf", defaultValue: 1 },
    { prop: "addlockconf", defaultValue: false },
    { prop: "comment", defaultValue: "" },
    { prop: "commentto", defaultValue: "" }
  ];

  var cb = function (err, result, resHeaders) {
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

exports.sendmany = function (args, res, next) {
  /**
   * parameters expected in the args:
   * request (SendManyRequest)
   **/
  var argList = [
    { prop: "fromaccount" },
    { prop: "amounts" },
    { prop: "minconf", defaultValue: 1 },
    { prop: "addlockconf", defaultValue: false },
    { prop: "comment", defaultValue: "" },
    { prop: "subtractfeefromamount", defaultValue: [] },
    { prop: "use_is", defaultValue: false },
    { prop: "use_ps", defaultValue: false }
  ];

  var cb = function (err, result, resHeaders) {
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

exports.sendtoaddress = function (args, res, next) {
  /**
   * parameters expected in the args:
   * request (SendToAddressRequest)
   **/
  var argList = [
    { prop: "syscoinaddress" },
    { prop: "amount" },
    { prop: "comment" },
    { prop: "commentto" },
    { prop: "subtractfeefromamount", defaultValue: false },
    { prop: "use_is", defaultValue: false },
    { prop: "use_ps", defaultValue: false }
  ];

  var cb = function (err, result, resHeaders) {
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

exports.signmessage = function (args, res, next) {
  /**
   * parameters expected in the args:
   * request (SignMessageRequest)
   **/
  var argList = [
    { prop: "syscoinaddress" },
    { prop: "message" }
  ];

  var cb = function (err, result, resHeaders) {
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

exports.syscoindecoderawtransaction = methodGenerator.generateGenericSyscoinMethod([
  { prop: "hexstring" }
], syscoinClient.syscoinDecodeRawTransaction, 'syscoindecoderawtransaction', 'GET');

exports.validateaddress = methodGenerator.generateGenericSyscoinMethod([
  { prop: "syscoinaddress" }
], syscoinClient.validateAddress, 'validateaddress', 'GET');

exports.verifymessage = function (args, res, next) {
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

  var cb = function (err, result, resHeaders) {
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

exports.walletlock = function (args, res, next) {
  var argList = [];
  var cb = function (err, result, resHeaders) {
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

exports.walletpassphrase = function (args, res, next) {
  /**
   * parameters expected in the args:
   * request (WalletPassphraseRequest)
   **/
  var argList = [
    { prop: "passphrase" },
    { prop: "timeout" }
  ];

  var cb = function (err, result, resHeaders) {
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

exports.walletpassphrasechange = function (args, res, next) {
  /**
   * parameters expected in the args:
   * request (WalletPassphraseChangeRequest)
   **/
  var argList = [
    { prop: "oldpassphrase" },
    { prop: "newpassphrase" }
  ];

  var cb = function (err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Wallet passphrase change ', result, "walletpassphrasechange");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.walletPassphraseChange.apply(syscoinClient, arr);

};

/*Added new functions heres*/
/******************General**************************/
exports.getaddressbalance = function (args, res, next) {
  /**
   * parameters expected in the args:
   * request (getaddressbalance)
   **/
  var cb = function (err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }



    commonUtils.log('get balance of address', result, "getaddressbalance");
    res.end(JSON.stringify(result));
  };
  var arr = [{ "addresses": args['addresses']['value'] }, cb];
  syscoinClient.getAddressBalance.apply(syscoinClient, arr);
};

exports.getaddresstxids = methodGenerator.generateGenericSyscoinMethod([
  { prop: "addresses" },
  { prop: "start" },
  { prop: "end" }
], syscoinClient.getAddressTxids, 'getaddresstxids', 'GET', true);

exports.getblockhashes = function (args, res, next) {
  /**
   * parameters expected in the args:
   * high (Number)
   * low (Number)
   **/
  var argList = [
    { prop: "high" },
    { prop: "low" },
  ];

  var cb = function (err, result, resHeaders) {
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

exports.getblockheaders = methodGenerator.generateGenericSyscoinMethod([
  { prop: "hash" },
  { prop: "count" },
  { prop: "verbose" }
], syscoinClient.getBlockHeaders, 'getblockheaders', 'GET');

exports.getchaintips = methodGenerator.generateGenericSyscoinMethod([],
  syscoinClient.getChainTips, 'getchaintips', 'GET');

exports.getspentinfo = function (args, res, next) {
  /**
   * parameters expected in the args:
   * txid (String)
   * index (Number)
   **/
  var argList = [
    { prop: "txid" },
    { prop: "index" }
  ];

  var cb = function (err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('Get address transaction id ', result, "getspentinfo");
    res.end(JSON.stringify(result));
  };

  // var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  var arr = [{ txid: args['txid']['value'], index: args['index']['value'] }, cb];
  console.log("sending arguments to .apply(): ", arr);
  syscoinClient.getSpentInfo.apply(syscoinClient, arr);
}

exports.getgovernanceinfo = methodGenerator.generateGenericSyscoinMethod([],
  syscoinClient.getGovernanceInfo, 'getgovernanceinfo', 'GET');

exports.getpoolinfo = methodGenerator.generateGenericSyscoinMethod([],
  syscoinClient.getPoolInfo, 'getpoolinfo', 'GET');

exports.getsuperblockbudget = methodGenerator.generateGenericSyscoinMethod([
  { prop: "index" }
], syscoinClient.getSuperBlockBudget, 'getsuperblockbudget', 'GET');

exports.gobject = methodGenerator.generateGenericSyscoinMethod([
  { prop: "command" }
], syscoinClient.gObject, 'gobject', 'GET');

exports.masternode = function (args, res, next) {
  /**
   * parameters expected in the args:
   * command (String)
   **/
  var argList = [
    { prop: "command" },
  ];

  var cb = function (err, result, resHeaders) {
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

exports.masternodebroadcast = function (args, res, next) {
  /**
   * parameters expected in the args:
   * command (String)
   **/
  var argList = [
    { prop: "command" }
  ];

  var cb = function (err, result, resHeaders) {
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

exports.masternodelist = methodGenerator.generateGenericSyscoinMethod([
  { prop: "mode" }
], syscoinClient.masternodeList, 'masternodelist', 'GET');

exports.getaddressdeltas = methodGenerator.generateGenericSyscoinMethod([
  { prop: "addresses" },
  { prop: "start" },
  { prop: "end" }
], syscoinClient.getAddressDeltas, 'getaddressdeltas', 'GET', true);

exports.getaddressmempool = methodGenerator.generateGenericSyscoinMethod([
  { prop: "addresses" },
  { prop: "start" },
  { prop: "end" }
], syscoinClient.getAddressMempool, 'getaddressmempool', 'GET', true);

exports.syscoinsendrawtransaction = function (args, res, next) {
  /**
   * parameters expected in the args:
   * request (syscoinsendrawtransaction)
   **/
  var argList = [
    { prop: "hexstring" },
    { prop: "allowhighfees" },
    { prop: "instantsend" }
  ];
  var cb = function (err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('syscoinsendrawtransaction', result, "syscoinsendrawtransaction");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  console.log(arr);
  syscoinClient.syscoinSendRawTransaction.apply(syscoinClient, arr);
};

exports.getgenerate = function (args, res, next) {
  var argList = [];
  var cb = function (err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('getgenerate', result, "getgenerate");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getGenerate.apply(syscoinClient, arr);
};

exports.setgenerate = function (args, res, next) {
  /**
   * parameters expected in the args:
   * generate (Boolean)
   * genproclimit (Number)
   **/
  var argList = [
    { prop: "generate" },
    { prop: "genproclimit" },
  ];
  var cb = function (err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('setgenerate', result, "setgenerate");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.setGenerate.apply(syscoinClient, arr);
};

exports.setnetworkactive = methodGenerator.generateGenericSyscoinMethod([
  { prop: "state" }
], syscoinClient.setNetworkActive, 'setnetworkactive', 'GET');

exports.mnsync = methodGenerator.generateGenericSyscoinMethod([
  { prop: "command" }
], syscoinClient.mnSync, 'mnsync', 'GET');

exports.dumphdinfo = methodGenerator.generateGenericSyscoinMethod([],
  syscoinClient.dumpHdInfo, 'dumphdinfo', 'GET');

exports.debug = methodGenerator.generateGenericSyscoinMethod([
  { prop: "command" }
], syscoinClient.debug, 'debug', 'GET');

exports.instantsendtoaddress = function (args, res, next) {
  /**
   * parameters expected in the args:
   * command (instantsendtoaddress)
   **/
  var argList = [
    { prop: "syscoinaddress" },
    { prop: "amount" },
    { prop: "comment" },
    { prop: "comment-to" },
    { prop: "subtractfeefromamount" }
  ];
  var cb = function (err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('instantsendtoaddress', result, "instantsendtoaddress");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.instantSendToAddress.apply(syscoinClient, arr);
};

exports.fundrawtransaction = function (args, res, next) {
  var argList = [
    { prop: "hexstring" },
    { prop: "watching" }
  ];
  var cb = function (err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('fundrawtransaction', result, "fundrawtransaction");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.fundRawTransaction.apply(syscoinClient, arr);
};

exports.getblocktemplate = methodGenerator.generateGenericSyscoinMethod([],
  syscoinClient.getBlockTemplate, 'getblocktemplate', 'GET');

exports.signrawtransaction = function (args, res, next) {
  var argList = [{ prop: "hexstring" }];
  var cb = function (err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('signrawtransaction', result, "signrawtransaction");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.signRawTransaction.apply(syscoinClient, arr);
};

exports.lockunspent = function (args, res, next) {
  var argList = [
    { prop: "unlock" },
    { prop: "transactions" }
  ];
  var cb = function (err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('lockunspent', result, "lockunspent");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "POST", cb);
  syscoinClient.lockUnspent.apply(syscoinClient, arr);
};

exports.syscoinlistreceivedbyaddress = methodGenerator.generateGenericSyscoinMethod([],
  syscoinClient.syscoinListReceivedByAddress, 'syscoinlistreceivedbyaddress', 'GET');

exports.getaddressutxos = function (args, res, next) {
  var argList = [
    { prop: "addresses" }
  ];

  var cb = function (err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      return commonUtils.reportError(res, err);
    }

    commonUtils.log('getaddressutxos ', result, "getaddressutxos");
    res.end(JSON.stringify(result));
  };

  var arr = varUtils.getArgsArr(argList, args, "GET", cb);
  syscoinClient.getAddressUtxos.apply(syscoinClient, arr);
}