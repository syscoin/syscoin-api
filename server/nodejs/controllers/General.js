'use strict';

var url = require('url');


var General = require('./GeneralService');


module.exports.addmultisigaddress = function addmultisigaddress (req, res, next) {
  General.addmultisigaddress(req.swagger.params, res, next);
};

module.exports.dumpprivkey = function dumpprivkey (req, res, next) {
  General.dumpprivkey(req.swagger.params, res, next);
};

module.exports.dumpwallet = function dumpwallet (req, res, next) {
  General.dumpwallet(req.swagger.params, res, next);
};

module.exports.encryptwallet = function encryptwallet (req, res, next) {
  General.encryptwallet(req.swagger.params, res, next);
};

module.exports.generate = function generate (req, res, next) {
  General.generate(req.swagger.params, res, next);
};

module.exports.generatepublickey = function generatepublickey (req, res, next) {
  General.generatepublickey(req.swagger.params, res, next);
};

module.exports.getaccount = function getaccount (req, res, next) {
  General.getaccount(req.swagger.params, res, next);
};

module.exports.getaccountaddress = function getaccountaddress (req, res, next) {
  General.getaccountaddress(req.swagger.params, res, next);
};

module.exports.getaddressesbyaccount = function getaddressesbyaccount (req, res, next) {
  General.getaddressesbyaccount(req.swagger.params, res, next);
};

module.exports.getbalance = function getbalance (req, res, next) {
  General.getbalance(req.swagger.params, res, next);
};

module.exports.getblock = function getblock (req, res, next) {
  General.getblock(req.swagger.params, res, next);
};

module.exports.getblockchaininfo = function getblockchaininfo (req, res, next) {
  General.getblockchaininfo(req.swagger.params, res, next);
};

module.exports.getblockcount = function getblockcount (req, res, next) {
  General.getblockcount(req.swagger.params, res, next);
};

module.exports.getinfo = function getinfo (req, res, next) {
  General.getinfo(req.swagger.params, res, next);
};

module.exports.getmininginfo = function getmininginfo (req, res, next) {
  General.getmininginfo(req.swagger.params, res, next);
};

module.exports.getnetworkinfo = function getnetworkinfo (req, res, next) {
  General.getnetworkinfo(req.swagger.params, res, next);
};

module.exports.getnewaddress = function getnewaddress (req, res, next) {
  General.getnewaddress(req.swagger.params, res, next);
};

module.exports.getpeerinfo = function getpeerinfo (req, res, next) {
  General.getpeerinfo(req.swagger.params, res, next);
};

module.exports.getreceivedbyaccount = function getreceivedbyaccount (req, res, next) {
  General.getreceivedbyaccount(req.swagger.params, res, next);
};

module.exports.getreceivedbyaddress = function getreceivedbyaddress (req, res, next) {
  General.getreceivedbyaddress(req.swagger.params, res, next);
};

module.exports.gettransaction = function gettransaction (req, res, next) {
  General.gettransaction(req.swagger.params, res, next);
};

module.exports.getunconfirmedbalance = function getunconfirmedbalance (req, res, next) {
  General.getunconfirmedbalance(req.swagger.params, res, next);
};

module.exports.getwalletinfo = function getwalletinfo (req, res, next) {
  General.getwalletinfo(req.swagger.params, res, next);
};

module.exports.importaddress = function importaddress (req, res, next) {
  General.importaddress(req.swagger.params, res, next);
};

module.exports.importprivkey = function importprivkey (req, res, next) {
  General.importprivkey(req.swagger.params, res, next);
};

module.exports.importpubkey = function importpubkey (req, res, next) {
  General.importpubkey(req.swagger.params, res, next);
};

module.exports.importwallet = function importwallet (req, res, next) {
  General.importwallet(req.swagger.params, res, next);
};

module.exports.listaccounts = function listaccounts (req, res, next) {
  General.listaccounts(req.swagger.params, res, next);
};

module.exports.listaddressgroupings = function listaddressgroupings (req, res, next) {
  General.listaddressgroupings(req.swagger.params, res, next);
};

module.exports.listreceivedbyaccount = function listreceivedbyaccount (req, res, next) {
  General.listreceivedbyaccount(req.swagger.params, res, next);
};

module.exports.listreceivedbyaddress = function listreceivedbyaddress (req, res, next) {
  General.listreceivedbyaddress(req.swagger.params, res, next);
};

module.exports.listsinceblock = function listsinceblock (req, res, next) {
  General.listsinceblock(req.swagger.params, res, next);
};

module.exports.listtransactions = function listtransactions (req, res, next) {
  General.listtransactions(req.swagger.params, res, next);
};

module.exports.move = function move (req, res, next) {
  General.move(req.swagger.params, res, next);
};
module.exports.sendfrom = function sendfrom (req, res, next) {
  General.sendfrom(req.swagger.params, res, next);
};

module.exports.sendmany = function sendmany (req, res, next) {
  General.sendmany(req.swagger.params, res, next);
};

module.exports.sendtoaddress = function sendtoaddress (req, res, next) {
  General.sendtoaddress(req.swagger.params, res, next);
};

module.exports.signmessage = function signmessage (req, res, next) {
  General.signmessage(req.swagger.params, res, next);
};

module.exports.syscoindecoderawtransaction = function syscoindecoderawtransaction (req, res, next) {
  General.syscoindecoderawtransaction(req.swagger.params, res, next);
};

module.exports.validateaddress = function validateaddress (req, res, next) {
  General.validateaddress(req.swagger.params, res, next);
};

module.exports.verifymessage = function verifymessage (req, res, next) {
  General.verifymessage(req.swagger.params, res, next);
};

module.exports.walletlock = function walletlock (req, res, next) {
  General.walletlock(req.swagger.params, res, next);
};

module.exports.walletpassphrase = function walletpassphrase (req, res, next) {
  General.walletpassphrase(req.swagger.params, res, next);
};

module.exports.walletpassphrasechange = function walletpassphrasechange (req, res, next) {
  General.walletpassphrasechange(req.swagger.params, res, next);
};


/* Added new function here */

/************General*****************************/

module.exports.getaddressbalance = function getaddressbalance (req, res, next) {
  console.log(req.swagger.params);
  General.getaddressbalance(req.swagger.params, res, next);
};

module.exports.getaddressdeltas = function getaddressdeltas (req, res, next) {
  General.getaddressdeltas(req.swagger.params, res, next);
};

module.exports.getaddressmempool = function getaddressmempool (req, res, next) {
  General.getaddressmempool(req.swagger.params, res, next);
};

module.exports.syscoinsendrawtransaction = function getaddressmempool (req, res, next) {
  General.syscoinsendrawtransaction(req.swagger.params, res, next);
};

module.exports.getgenerate = function getgenerate (req, res, next) {
  General.getgenerate(req.swagger.params, res, next);
};

module.exports.setgenerate = function setgenerate (req, res, next) {
  General.setgenerate(req.swagger.params, res, next);
};

module.exports.setnetworkactive = function setnetworkactive (req, res, next) {
  General.setnetworkactive(req.swagger.params, res, next);
};

module.exports.mnsync = function mnsync (req, res, next) {
  General.mnsync(req.swagger.params, res, next);
};

module.exports.dumphdinfo = function dumphdinfo (req, res, next) {
  General.dumphdinfo(req.swagger.params, res, next);
};

module.exports.debug = function debug (req, res, next) {
  General.debug(req.swagger.params, res, next);
};

module.exports.instantsendtoaddress = function debug (req, res, next) {
  General.instantsendtoaddress(req.swagger.params, res, next);
};