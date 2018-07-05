var Q = require('q');
var rp = require('request-promise');

var AuthHelper = require('./authHelper');
var Config = require('../../../spec/config');

function getAccountAddress(account) {
  var deferred = Q.defer();
  var url = Config.HOST + 'getaccountaddress';
  var requestOptions = AuthHelper.requestOptions();
  requestOptions.qs = {
    'account': account
  };

  rp(url, requestOptions)
    .then(function(result) {
      var syscoinaddress = JSON.parse(result.body);
      deferred.resolve({ address: syscoinaddress, response: result });
    })
    .catch(function(error) {
      console.log('Error fetching syscoin address: ' + JSON.stringify(error));
      deferred.reject(error);
    });

  return deferred.promise;
}

function sendSyscoin(toAddress, amount, comment, commentto, subtractFeeFromAmount) {
  var deferred = Q.defer();
  var url = Config.HOST + 'sendtoaddress';
  var requestOptions = AuthHelper.requestOptions();
  requestOptions.method = 'POST';
  requestOptions.json = {
    'syscoinaddress': toAddress,
    'amount': amount,
    'comment': comment,
    'commentto': commentto,
    'subtractfeefromamount': subtractFeeFromAmount
  };

  rp(url, requestOptions)
    .then(function(result) {
      var txid = result.body;
      deferred.resolve({ txid: txid, response: result });
    })
    .catch(function(error) {
      console.log('Error sending syscoin: ' + JSON.stringify(error));
      deferred.reject(error);
    });

  return deferred.promise;
}

function signMessage(address, message) {
  var deferred = Q.defer();
  var url = Config.HOST + 'signmessage';
  var requestOptions = AuthHelper.requestOptions();
  requestOptions.method = 'POST';
  requestOptions.json = {
    'syscoinaddress': address,
    'message': message
  };

  rp(url, requestOptions)
    .then(function(result) {
      var signature = result.body;
      deferred.resolve({ signature: signature, response: result });
    })
    .catch(function(error) {
      console.log('Error fetching syscoin address: ' + JSON.stringify(error));
      deferred.reject(error);
    });

  return deferred.promise;
}

function offerAccept(alias, guid, quantity, message, exttxid, paymentoption) {
  var deferred = Q.defer();
  var url = Config.HOST + 'offeraccept';
  var requestOptions = AuthHelper.requestOptions();
  requestOptions.method = 'POST';
  requestOptions.json = {
    'alias': alias,
    'guid': guid,
    'quantity': quantity,
    'message': message,
    'exttxid': exttxid,
    'paymentoption': paymentoption
  };

  rp(url, requestOptions)
    .then(function(result) {
      var tx = result.body;
      deferred.resolve({ tx: tx, response: result });
    })
    .catch(function(error) {
      console.log('Error accepting offer: ' + JSON.stringify(error));
      deferred.reject(error);
    });

  return deferred.promise;
}

function escrowNew(alias, offer, quantity, message, arbiterAlias, extTx, paymentOption, redeemScript, height) {
  var deferred = Q.defer();
  var url = Config.HOST + 'escrownew';
  var requestOptions = AuthHelper.requestOptions();
  requestOptions.method = 'POST';
  requestOptions.json = {
    'alias': alias,
    'offer': offer,
    'quantity': quantity,
    'message': message,
    'arbiter': arbiterAlias,
    'exttx': extTx,
    'paymentoption': paymentOption,
    'redeemscript': redeemScript,
    'height': height
  };

  rp(url, requestOptions)
    .then(function(result) {
      var tx = result.body;
      deferred.resolve({ tx: tx, response: result });
    })
    .catch(function(error) {
      console.log('Error creating new escrow: ' + JSON.stringify(error));
      deferred.reject(error);
    });

  return deferred.promise;
}

module.exports = {
  getAccountAddress: getAccountAddress,
  sendSyscoin: sendSyscoin,
  signMessage: signMessage,
  offerAccept: offerAccept,
  escrowNew: escrowNew
};