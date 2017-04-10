var Q = require('q');
var rp = require("request-promise");

var AuthHelper = require("./authHelper");

function getAccountAddress(account) {
  var deferred = Q.defer();
  var url = "http://localhost:8001/getaccountaddress";
  var requestOptions = AuthHelper.requestOptions();
  requestOptions.qs = {
    "account": account
  };

  rp(url, requestOptions)
    .then(function(result) {
      var syscoinaddress = JSON.parse(result.body);
      deferred.resolve({ address: syscoinaddress, response: result });
    })
    .catch(function(error) {
      console.log("Error fetching syscoin address: " + JSON.stringify(error));
      deferred.reject(error);
    });

  return deferred.promise;
}

function sendSyscoin(toAddress, amount, comment, commentto, subtractFeeFromAmount) {
  var deferred = Q.defer();
  var url = "http://localhost:8001/sendtoaddress";
  var requestOptions = AuthHelper.requestOptions();
  requestOptions.method = "POST";
  requestOptions.json = {
    "syscoinaddress": toAddress,
    "amount": amount,
    "comment": !comment ? "" : comment,
    "commentto": !commentto ? "" : commentto,
    "subtractfeefromamount": !subtractFeeFromAmount ? false : subtractFeeFromAmount
  };

  rp(url, requestOptions)
    .then(function(result) {
      var txid = result.body;
      deferred.resolve({ txid: txid, response: result });
    })
    .catch(function(error) {
      console.log("Error sending syscoin: " + JSON.stringify(error));
      deferred.reject(error);
    });

  return deferred.promise;
}

function signMessage(address, message) {
  var deferred = Q.defer();
  var url = "http://localhost:8001/signmessage";
  var requestOptions = AuthHelper.requestOptions();
  requestOptions.method = "POST";
  requestOptions.json = {
    "syscoinaddress": address,
    "message": message
  };

  rp(url, requestOptions)
    .then(function(result) {
      var signature = result.body;
      deferred.resolve({ signature: signature, response: result })
    })
    .catch(function(error) {
      console.log("Error fetching syscoin address: " + JSON.stringify(error));
      deferred.reject(error);
    });

  return deferred.promise;
}

module.exports.getAccountAddress = getAccountAddress;
module.exports.sendSyscoin = sendSyscoin;
module.exports.signMessage = signMessage;