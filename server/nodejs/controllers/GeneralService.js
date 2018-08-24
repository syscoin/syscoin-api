const syscoinClient = require('../index').syscoinClient;
const varUtils = require('./util/varUtils');
const commonUtils = require('./util/commonUtils');
const generalServiceGetInfoUtils = require('./util/generalServiceGetInfoUtils');
const methodGenerator = require('./util/methodGenerator');

module.exports = {
  addmultisigaddress: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'nrequired' },
    { prop: 'keysobject', defaultValue: '' },
    { prop: 'account', defaultValue: '' }
  ], syscoinClient.addMultiSigAddress, 'addmultisigaddress', 'POST'),

  dumpprivkey: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'address' }
  ], syscoinClient.dumpPrivKey, 'dumpprivkey', 'GET'),

  dumpwallet: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'filename' }
  ], syscoinClient.dumpWallet, 'dumpwallet', 'GET'),

  encryptwallet: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'passphrase' }
  ], syscoinClient.encryptWallet, 'encryptwallet', 'POST'),

  generate: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'numBlocks' },
    { prop: 'maxtries', defaultValue: 1000000 }
  ], syscoinClient.generate, 'generate', 'GET'),

  generatepublickey: methodGenerator.generateGenericSyscoinMethod([],
    syscoinClient.generatepublickey, 'generatepublickey', 'GET'),

  getaccount: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'syscoinaddress' }
  ], syscoinClient.getAccount, 'getaccount', 'GET'),

  getaccountaddress: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'account' }
  ], syscoinClient.getAccountAddress, 'getaccountaddress', 'GET'),

  //Deprecated
  getaddressesbyaccount: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'account' }
  ], syscoinClient.getAddressesByAccount, 'getaddressesbyaccount', 'GET'),

  getbalance: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'account', defaultValue: '*' },
    { prop: 'minconf', defaultValue: 1 },
    { prop: 'addlockconf', defaultValue: false },
    { prop: 'includeWatchonly', defaultValue: false }
  ], syscoinClient.getBalance, 'getbalance', 'GET'),

  getblock: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'hash', },
    { prop: 'verbose', defaultValue: true }
  ], syscoinClient.getBlock, 'getblock', 'GET'),

  getblockchaininfo: methodGenerator.generateGenericSyscoinMethod(
    [],
    syscoinClient.getBlockchainInfo, 'getblockchaininfo', 'GET'),

  getblockcount: methodGenerator.generateGenericSyscoinMethod(
    [],
    syscoinClient.getBlockCount, 'getblockcount', 'GET'),

  /*
  * Leave this (getInfo) method untouched for now due to additional error handling.
  * TO-DO: Refactor taking the error handling into account
  */
  getinfo: function (args, res) {
    var argList = [];
    var cb = function (err, result) {
      res.setHeader('Content-Type', 'application/json');

      if (err) {
        let jsonError = commonUtils.parseError(err);
        if (generalServiceGetInfoUtils.getInfoResponseIsWalletPercentageResponse(jsonError)) {
          const walletPercentage = generalServiceGetInfoUtils.extractWalletPercentageFromGetInfoResponseMessage(jsonError.message);
          const infoObj = generalServiceGetInfoUtils.createCustomWalletPercentageInfoResponse(walletPercentage);
          commonUtils.log('Special Info:', infoObj, 'getinfo');
          res.end(JSON.stringify(infoObj));
          return;
        }
        else {
          return commonUtils.reportError(res, err);
        }
      }

      commonUtils.log('Info:', result, 'getinfo');
      res.end(JSON.stringify(result));
    };

    var arr = varUtils.getArgsArr(argList, args, 'GET', cb);
    syscoinClient.getInfo.apply(syscoinClient, arr);
  },

  getmininginfo: methodGenerator.generateGenericSyscoinMethod(
    [],
    syscoinClient.getMiningInfo, 'getmininginfo', 'GET'),

  getnetworkinfo: methodGenerator.generateGenericSyscoinMethod(
    [],
    syscoinClient.getNetworkInfo, 'getnetworkinfo', 'GET'),

  getnewaddress: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'account' }
  ], syscoinClient.getNewAddress, 'getnewaddress', 'POST'),

  getpeerinfo: methodGenerator.generateGenericSyscoinMethod([],
    syscoinClient.getPeerInfo, 'getpeerinfo', 'GET'),

  getreceivedbyaccount: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'account' },
    { prop: 'minconf', defaultValue: 1 },
    { prop: 'addlockconf', defaultValue: false }
  ], syscoinClient.getReceivedByAccount, 'getreceivedbyaccount', 'GET'),

  getreceivedbyaddress: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'syscoinaddress' },
    { prop: 'minconf', defaultValue: 1 },
    { prop: 'addlockconf', defaultValue: false }
  ], syscoinClient.getReceivedByAddress, 'getreceivedbyaddress', 'GET'),

  // gettransaction: methodGenerator.generateGenericSyscoinMethod([
  //   { prop: 'txid' },
  //   { prop: 'includeWatchonly', defaultValue: false }
  // ], syscoinClient.getTransaction, 'gettransaction', 'GET'),

  /* Note: Putting the old method back, as the one needs some update to work properly */
  gettransaction: function(args, res, next) {
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
  },

  getunconfirmedbalance: methodGenerator.generateGenericSyscoinMethod([],
    syscoinClient.getUnconfirmedBalance, 'getunconfirmedbalance', 'GET'),

  getwalletinfo: methodGenerator.generateGenericSyscoinMethod([],
    syscoinClient.getWalletInfo, 'getwalletinfo', 'GET'),

  importaddress: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'script' },
    { prop: 'label', defaultValue: '' },
    { prop: 'rescan', defaultValue: true },
    { prop: 'p2sh', defaultValue: false }
  ], syscoinClient.importAddress, 'importaddress', 'POST'),

  importprivkey: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'syscoinprivkey' },
    { prop: 'label', defaultValue: '' },
    { prop: 'rescan', defaultValue: true }
  ], syscoinClient.importPrivKey, 'importprivkey', 'POST'),

  importpubkey: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'pubkey' },
    { prop: 'label', defaultValue: '' },
    { prop: 'rescan', defaultValue: true }
  ], syscoinClient.importPubKey, 'importpubkey', 'POST'),

  importwallet: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'filename' }
  ], syscoinClient.importWallet, 'importwallet', 'POST'),

  listaccounts: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'minconf', defaultValue: 1 },
    { prop: 'addlockconf', defaultValue: false },
    { prop: 'includeWatchonly', defaultValue: false }
  ], syscoinClient.listAccounts, 'listaccounts', 'GET'),

  listaddressgroupings: methodGenerator.generateGenericSyscoinMethod([],
    syscoinClient.listAddressGroupings, 'listaddressgroupings', 'GET'),

  listreceivedbyaccount: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'minconf', defaultValue: 0 },
    { prop: 'addlockconf', defaultValue: false },
    { prop: 'includeempty', defaultValue: false },
    { prop: 'includeWatchonly', defaultValue: false }
  ], syscoinClient.listReceivedByAccount, 'listreceivedbyaccount', 'GET'),

  listreceivedbyaddress: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'minconf', defaultValue: 0 },
    { prop: 'addlockconf', defaultValue: false },
    { prop: 'includeempty', defaultValue: false },
    { prop: 'includeWatchonly', defaultValue: false }
  ], syscoinClient.listReceivedByAddress, 'listreceivedbyaddress', 'GET'),

  listsinceblock: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'blockhash', defaultValue: '' },
    { prop: 'targetConfirmations', defaultValue: 1 },
    { prop: 'includeWatchonly', defaultValue: false }
  ], syscoinClient.listSinceBlock, 'listsinceblock', 'GET'),

  listtransactions: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'account', defaultValue: '*' },
    { prop: 'count', defaultValue: 10 },
    { prop: 'from', defaultValue: 0 },
    { prop: 'includeWatchonly', defaultValue: false }
  ], syscoinClient.listTransactions, 'listtransactions', 'GET'),

  listunspent: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'minconf', defaultValue: 1 },
    { prop: 'maxconf', defaultValue: 9999999 },
    { prop: 'adresses', defaultValue: [] }
  ], syscoinClient.listUnspent, 'listunspent', 'GET'),

  //Deprecated
  move: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'fromaccount' },
    { prop: 'toaccount' },
    { prop: 'amount' },
    { prop: 'minconf', defaultValue: 1 },
    { prop: 'comment', defaultValue: '' }
  ], syscoinClient.move, 'move', 'POST'),

  //Deprecated
  sendfrom: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'fromaccount' },
    { prop: 'tosyscoinaddress' },
    { prop: 'amount' },
    { prop: 'minconf', defaultValue: 1 },
    { prop: 'addlockconf', defaultValue: false },
    { prop: 'comment', defaultValue: '' },
    { prop: 'commentto', defaultValue: '' }
  ], syscoinClient.sendFrom, 'sendfrom', 'POST'),

  sendmany: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'fromaccount' },
    { prop: 'amounts' },
    { prop: 'minconf', defaultValue: 1 },
    { prop: 'addlockconf', defaultValue: false },
    { prop: 'comment', defaultValue: '' },
    { prop: 'subtractfeefromamount', defaultValue: [] },
    { prop: 'use_is', defaultValue: false },
    { prop: 'use_ps', defaultValue: false }
  ], syscoinClient.sendMany, 'sendmany', 'POST'),

  sendtoaddress: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'syscoinaddress' },
    { prop: 'amount' },
    { prop: 'comment' },
    { prop: 'commentto' },
    { prop: 'subtractfeefromamount', defaultValue: false },
    { prop: 'use_is', defaultValue: false },
    { prop: 'use_ps', defaultValue: false }
  ], syscoinClient.sendToAddress, 'sendtoaddress', 'POST'),

  signmessage: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'syscoinaddress' },
    { prop: 'message' }
  ], syscoinClient.signMessage, 'signmessage', 'POST'),

  syscoindecoderawtransaction: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'hexstring' }
  ], syscoinClient.syscoinDecodeRawTransaction, 'syscoindecoderawtransaction', 'GET'),

  validateaddress: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'syscoinaddress' }
  ], syscoinClient.validateAddress, 'validateaddress', 'GET'),

  verifymessage: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'syscoinaddress' },
    { prop: 'signature' },
    { prop: 'message' }
  ], syscoinClient.verifyMessage, 'verifymessage', 'GET'),

  walletlock: methodGenerator.generateGenericSyscoinMethod([],
    syscoinClient.walletLock, 'walletlock', 'POST'),

  walletpassphrase: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'passphrase' },
    { prop: 'timeout' }
  ], syscoinClient.walletPassphrase, 'walletpassphrase', 'POST'),

  walletpassphrasechange: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'oldpassphrase' },
    { prop: 'newpassphrase' }
  ], syscoinClient.walletPassphraseChange, 'walletpassphrasechange', 'POST'),

  getaddressbalance: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'addresses' }
  ], syscoinClient.getAddressBalance, 'getaddressbalance', 'GET', true),

  getaddresstxids: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'addresses' },
    { prop: 'start' },
    { prop: 'end' }
  ], syscoinClient.getAddressTxids, 'getaddresstxids', 'GET', true),

  getblockhashes: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'high' },
    { prop: 'low' }
  ], syscoinClient.getBlockHashes, 'getblockhashes', 'GET'),

  getblockhash: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'height' }
  ]),

  getblockheaders: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'hash' },
    { prop: 'count' },
    { prop: 'verbose' }
  ], syscoinClient.getBlockHeaders, 'getblockheaders', 'GET'),

  getchaintips: methodGenerator.generateGenericSyscoinMethod([],
    syscoinClient.getChainTips, 'getchaintips', 'GET'),

  getspentinfo: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'txid' },
    { prop: 'index' }
  ], syscoinClient.getSpentInfo, 'getspentinfo', 'GET', true),

  getgovernanceinfo: methodGenerator.generateGenericSyscoinMethod([],
    syscoinClient.getGovernanceInfo, 'getgovernanceinfo', 'GET'),

  getpoolinfo: methodGenerator.generateGenericSyscoinMethod([],
    syscoinClient.getPoolInfo, 'getpoolinfo', 'GET'),

  getsuperblockbudget: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'index' }
  ], syscoinClient.getSuperBlockBudget, 'getsuperblockbudget', 'GET'),

  gobject: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'command' }
  ], syscoinClient.gObject, 'gobject', 'GET'),

  masternode: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'command' }
  ], syscoinClient.masternode, 'masternode', 'GET'),

  masternodebroadcast: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'command' }
  ], syscoinClient.masternodeBroadcast, 'masternodebroadcast', 'GET'),

  masternodelist: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'mode' }
  ], syscoinClient.masternodeList, 'masternodelist', 'GET'),

  getaddressdeltas: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'addresses' },
    { prop: 'start' },
    { prop: 'end' }
  ], syscoinClient.getAddressDeltas, 'getaddressdeltas', 'GET', true),

  getaddressmempool: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'addresses' },
    { prop: 'start' },
    { prop: 'end' }
  ], syscoinClient.getAddressMempool, 'getaddressmempool', 'GET', true),

  syscoinsendrawtransaction: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'hexstring' },
    { prop: 'allowhighfees' },
    { prop: 'instantsend' }
  ], syscoinClient.syscoinSendRawTransaction, 'syscoinsendrawtransaction', 'POST'),

  getgenerate: methodGenerator.generateGenericSyscoinMethod([],
    syscoinClient.getGenerate, 'getgenerate', 'GET'),

  setgenerate: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'generate' },
    { prop: 'genproclimit' }
  ], syscoinClient.setGenerate, 'setgenerate', 'GET'),

  setnetworkactive: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'state' }
  ], syscoinClient.setNetworkActive, 'setnetworkactive', 'GET'),

  mnsync: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'command' }
  ], syscoinClient.mnSync, 'mnsync', 'GET'),

  dumphdinfo: methodGenerator.generateGenericSyscoinMethod([],
    syscoinClient.dumpHdInfo, 'dumphdinfo', 'GET'),

  debug: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'command' }
  ], syscoinClient.debug, 'debug', 'GET'),

  instantsendtoaddress: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'syscoinaddress' },
    { prop: 'amount' },
    { prop: 'comment' },
    { prop: 'comment-to' },
    { prop: 'subtractfeefromamount' }
  ], syscoinClient.instantSendToAddress, 'instantsendtoaddress', 'POST'),

  fundrawtransaction: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'hexstring' },
    { prop: 'watching' }
  ], syscoinClient.fundRawTransaction, 'fundrawtransaction', 'POST'),

  getblocktemplate: methodGenerator.generateGenericSyscoinMethod([],
    syscoinClient.getBlockTemplate, 'getblocktemplate', 'GET'),

  signrawtransaction: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'hexstring' }
  ], syscoinClient.signRawTransaction, 'signrawtransaction', 'POST'),

  lockunspent: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'unlock' },
    { prop: 'transactions' }
  ], syscoinClient.lockUnspent, 'lockunspent', 'POST'),

  syscoinlistreceivedbyaddress: methodGenerator.generateGenericSyscoinMethod([],
    syscoinClient.syscoinListReceivedByAddress, 'syscoinlistreceivedbyaddress', 'GET'),

  getaddressutxos: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'addresses' }
  ], syscoinClient.getAddressUtxos, 'getaddressutxos', 'GET'),

  setaccount: methodGenerator.generateGenericSyscoinMethod([
    { prop: 'address'},
    { prop: 'account'}
  ], syscoinClient.setAccount, 'setaccount', 'POST'),

    resendwallettransactions: methodGenerator.generateGenericSyscoinMethod([],
    syscoinClient.resendWalletTransactions, 'resendwallettransactions', 'GET')
};