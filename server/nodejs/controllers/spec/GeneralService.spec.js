var expect  = require("chai").expect;
var rp = require("request-promise");

var AuthHelper = require("./helper/authHelper");
var DataHelper = require("./helper/dataHelper");
var VerifyHelper = require("./helper/verifyHelper");

describe.skip("General Service API", function() {

  describe("getaccount", function() {
    it("Returns account name", function(done) {
      DataHelper.getAccountAddress("").then(function(getAddressResult) {
        url = "http://localhost:8001/getaccount";
        requestOptions = AuthHelper.requestOptions();
        requestOptions.qs = {
          "syscoinaddress": getAddressResult.address
        };

        rp(url, requestOptions).then(function(result) {
          expect(result.statusCode).to.equal(200);
          expect(result.body).to.equal('""');
          done();
        });
      });
    });
  });

  describe("getaccountaddress", function() {
    it("Returns syscoin address", function(done) {
      DataHelper.getAccountAddress("").then(function(getAddressResult) {
        console.info("Got root account address: " + getAddressResult.address);
        VerifyHelper.verifySyscoinAddress(getAddressResult.address);
        done();
      });
    });
  });

  describe("getaddressesbyaccount", function() {
    it("Returns list of addresses", function(done) {
      var url = "http://localhost:8001/getaddressesbyaccount";
      var requestOptions = AuthHelper.requestOptions();
      requestOptions.qs = {
        "account": ""
      };

      rp(url, requestOptions).then(function (result) {
        expect(result.statusCode).to.equal(200);

        var addresslist = JSON.parse(result.body);
        expect(addresslist.length).to.be.at.least(1);
        done();
      });
    });
  });

  describe("getbalance", function() {
    it("Returns balance", function(done) {
      url = "http://localhost:8001/getbalance";
      var requestOptions = AuthHelper.requestOptions();
      requestOptions.qs = {
        "account": "*"
      };

      rp(url, requestOptions).then(function(result) {
        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.at.least(0);
        done();
      });
    });
  });

  describe("getinfo", function() {
    it("Returns an object with the version property defined", function(done) {
      var url = "http://localhost:8001/getinfo";
      rp(url, AuthHelper.requestOptions()).then(function(result) {
        var info = JSON.parse(result.body);
        expect(result.statusCode).to.equal(200);
        expect(info.sysversion).to.not.equal(undefined);
        done();
      });
    });
  });

  describe("getmininginfo", function() {
    it("Returns object with hashrate", function(done) {
      var url = "http://localhost:8001/getmininginfo";
      rp(url, AuthHelper.requestOptions()).then(function(result) {
        var info = JSON.parse(result.body);
        expect(result.statusCode).to.equal(200);
        expect(info.networkhashps).to.not.equal(undefined);
        done();
      });
    });
  });

  describe("getnewaddress", function() {
    it("Returns new address for default account", function(done) {
      var url = "http://localhost:8001/getnewaddress";
      var requestOptions = AuthHelper.requestOptions();
      requestOptions.method = "POST";
      requestOptions.json = {
        "account": ""
      };

      rp(url, requestOptions).then(function(result) {
        expect(result.statusCode).to.equal(200);
        VerifyHelper.verifySyscoinAddress(result.body);
        done();
      });
    });
  });

  describe("getreceivedbyaddress", function() {
    it("Returns total received by a syscoin address", function(done) {
      DataHelper.getAccountAddress("").then(function(getAddressResult) {
        var url = "http://localhost:8001/getreceivedbyaddress";
        var requestOptions = AuthHelper.requestOptions();
        requestOptions.qs = {
          "syscoinaddress": getAddressResult.address
        };

        rp(url, requestOptions).then(function(result) {
          expect(result.statusCode).to.equal(200);
          expect(result.body).to.be.at.least(0);
          done();
        });
      });
    });
  });

  describe("gettransaction", function() {
    it("Returns a transaction object", function(done) {
      DataHelper.getAccountAddress("").then(function(getAddressResult) {
        DataHelper.sendSyscoin(getAddressResult.address, 1).then(function(sendResult) {
          console.info("Transaction id: " + sendResult.txid);
          VerifyHelper.verifyTransactionId(sendResult.txid);
          done();
        });
      });
    });
  });

  describe("getwalletinfo", function() {
    it("Returns wallet info", function(done) {
      var url = "http://localhost:8001/getwalletinfo";
      rp(url, AuthHelper.requestOptions()).then(function(result) {
        var info = JSON.parse(result.body);
        expect(result.statusCode).to.equal(200);
        expect(info.walletversion).to.equal(130000);
        expect(info.balance).to.be.at.least(0);
        done();
      });
    });
  });

  describe("listaccounts", function() {
    it("Returns a list of accounts", function(done) {
      var url = "http://localhost:8001/listaccounts";
      rp(url, AuthHelper.requestOptions()).then(function(result) {
        var accountList = JSON.parse(result.body);
        var accountCount = 0;
        expect(result.statusCode).to.equal(200);

        for(var account in accountList) {
          expect(accountList[account]).to.be.at.least(0);
          accountCount++;
        }

        expect(accountCount).to.be.at.least(1);
        done();
      });
    });
  });

  describe("listreceivedbyaddress", function() {
    it("Returns a list of object with balances per address", function(done) {
      var url = "http://localhost:8001/listreceivedbyaddress";
      rp(url, AuthHelper.requestOptions()).then(function(result) {
        var addressList = JSON.parse(result.body);
        var addressCount = 0;
        expect(result.statusCode).to.equal(200);

        for(var address in addressList) {
          expect(addressList[address].amount).to.be.at.least(0);
          addressCount++;
        }

        expect(addressCount).to.be.at.least(1);
        done();
      });
    });
  });


  describe("listtransactions", function() {
    it("Returns a list of transactions", function(done) {
      var url = "http://localhost:8001/listtransactions";
      var requestOptions = AuthHelper.requestOptions();
      var account = "";

      rp(url, requestOptions).then(function(result) {
        var txList = JSON.parse(result.body);
        var txCount = 0;
        expect(result.statusCode).to.equal(200);

        for(var tx in txList) {
          expect(txList[tx].account).to.equal(account);
          txCount++;
        }

        expect(txCount).to.be.at.least(1);
        done();
      });
    });
  });

  describe("sendtoaddress", function() {
    it("Returns a transaction id for sending to an address", function(done) {
      DataHelper.getAccountAddress("").then(function(getAddressResult) {
        DataHelper.sendSyscoin(getAddressResult.address, 1).then(function(sendResult) {
          expect(sendResult.response.statusCode).to.equal(200);
          VerifyHelper.verifyTransactionId(sendResult.txid);
          done();
        });
      });
    });
  });

  describe("signmessage", function() {
    it("Returns a message signature", function(done) {
      DataHelper.getAccountAddress("").then(function(getAddressResult) {
        DataHelper.signMessage(getAddressResult.address, "test").then(function(signResult) {
          expect(signResult.response.statusCode).to.equal(200);
          expect(signResult.signature[signResult.signature.length-1]).to.equal("=");
          done();
        })
      });
    });
  });

  describe("verifymessage", function() {
    it("Returns whether a message signature is valid", function(done) {
      var message = "test";

      DataHelper.getAccountAddress("").then(function(getAddressResult) {
        DataHelper.signMessage(getAddressResult.address, message).then(function(signResult) {
          expect(signResult.signature[signResult.signature.length-1]).to.equal("=");

          var url = "http://localhost:8001/verifymessage";
          var requestOptions = AuthHelper.requestOptions();
          requestOptions.qs = {
            "syscoinaddress": getAddressResult.address,
            "signature": signResult.signature,
            "message": message
          };

          rp(url, requestOptions).then(function(result) {
            expect(result.statusCode).to.equal(200);
            expect(JSON.parse(result.body)).to.equal(true);
            done();
          });
        })
      });
    });
  });

});