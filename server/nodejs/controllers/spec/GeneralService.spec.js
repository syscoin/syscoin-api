var expect  = require("chai").expect;
var rp = require("request-promise");

var AuthHelper = require("./helpers/authHelper");
var DataHelper = require("./helpers/dataHelper");

describe("General Service API", function() {

  describe("getaccount", function() {
    it("Returns account name", function(done) {
      DataHelper.getAccountAddress("").then(function(address) {
        url = "http://localhost:8001/getaccount";
        requestOptions = AuthHelper.requestOptions();
        requestOptions.qs = {
          "syscoinaddress": address
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
      DataHelper.getAccountAddress("").then(function(address) {
        DataHelper.verifySyscoinAddress(address);
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
        DataHelper.verifySyscoinAddress(result.body);
        done();
      });
    });
  });

  describe("getreceivedbyaddress", function() {
    it("Returns total received by a syscoin address", function(done) {
      DataHelper.getAccountAddress("").then(function(address) {
        var url = "http://localhost:8001/getreceivedbyaddress";
        var requestOptions = AuthHelper.requestOptions();
        requestOptions.qs = {
          "syscoinaddress": address
        };

        rp(url, requestOptions).then(function(result) {
          expect(result.statusCode).to.equal(200);
          expect(result.body).to.be.at.least(0);
          done();
        });
      });
    });
  });

  //describe("gettransaction", function() {
  //  it("Returns a transaction object", function(done) {
  //    var url = "http://localhost:8001/getinfo";
  //    request(url, AuthHelper.requestOptions, function(error, response, body) {
  //      var info = JSON.parse(body);
  //      expect(response.statusCode).to.equal(200);
  //      expect(info.sysversion).to.not.equal(undefined);
  //      done();
  //    });
  //  });
  //});
  //
  //describe("getwalletinfo", function() {
  //  it("Returns wallet info", function(done) {
  //    var url = "http://localhost:8001/getinfo";
  //    request(url, AuthHelper.requestOptions, function(error, response, body) {
  //      var info = JSON.parse(body);
  //      expect(response.statusCode).to.equal(200);
  //      expect(info.sysversion).to.not.equal(undefined);
  //      done();
  //    });
  //  });
  //});
  //
  //describe("listaccounts", function() {
  //  it("Returns a list of accounts", function(done) {
  //    var url = "http://localhost:8001/getinfo";
  //    request(url, AuthHelper.requestOptions, function(error, response, body) {
  //      var info = JSON.parse(body);
  //      expect(response.statusCode).to.equal(200);
  //      expect(info.sysversion).to.not.equal(undefined);
  //      done();
  //    });
  //  });
  //});
  //
  //describe("listreceivedbyaddress", function() {
  //  it("Returns a list of object with balances per address", function(done) {
  //    var url = "http://localhost:8001/getinfo";
  //    request(url, AuthHelper.requestOptions, function(error, response, body) {
  //      var info = JSON.parse(body);
  //      expect(response.statusCode).to.equal(200);
  //      expect(info.sysversion).to.not.equal(undefined);
  //      done();
  //    });
  //  });
  //});
  //
  //
  //describe("listtransactions", function() {
  //  it("Returns a list of transactions", function(done) {
  //    var url = "http://localhost:8001/getinfo";
  //    request(url, AuthHelper.requestOptions, function(error, response, body) {
  //      var info = JSON.parse(body);
  //      expect(response.statusCode).to.equal(200);
  //      expect(info.sysversion).to.not.equal(undefined);
  //      done();
  //    });
  //  });
  //});
  //
  //describe("sendtoaddress", function() {
  //  it("Returns a transaction id for sending to an address", function(done) {
  //    var url = "http://localhost:8001/getinfo";
  //    request(url, AuthHelper.requestOptions, function(error, response, body) {
  //      var info = JSON.parse(body);
  //      expect(response.statusCode).to.equal(200);
  //      expect(info.sysversion).to.not.equal(undefined);
  //      done();
  //    });
  //  });
  //});
  //
  //describe("signmessage", function() {
  //  it("Returns a message signature", function(done) {
  //    var url = "http://localhost:8001/getinfo";
  //    request(url, AuthHelper.requestOptions, function(error, response, body) {
  //      var info = JSON.parse(body);
  //      expect(response.statusCode).to.equal(200);
  //      expect(info.sysversion).to.not.equal(undefined);
  //      done();
  //    });
  //  });
  //});
  //
  //describe("verifymessage", function() {
  //  it("Returns whether a message signature is valid", function(done) {
  //    var url = "http://localhost:8001/getinfo";
  //    request(url, AuthHelper.requestOptions, function(error, response, body) {
  //      var info = JSON.parse(body);
  //      expect(response.statusCode).to.equal(200);
  //      expect(info.sysversion).to.not.equal(undefined);
  //      done();
  //    });
  //  });
  //});

});