var Q = require('q');
var rp = require("request-promise");
var expect  = require("chai").expect;

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
      deferred.resolve(syscoinaddress);
    })
    .catch(function(error){
      console.log("Error fetching syscoin address: " + JSON.stringify(error));
      deferred.reject(error);
    });

  return deferred.promise;
}

function verifySyscoinAddress(address) {
  expect(address.length).to.equal(34);
}

module.exports.getAccountAddress = getAccountAddress;
module.exports.verifySyscoinAddress = verifySyscoinAddress;