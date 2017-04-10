var expect  = require("chai").expect;
var rp = require("request-promise");

var AuthHelper = require("./helper/authHelper");
var VerifyHelper = require("./helper/verifyHelper");
var Config = require("../../spec/config");

describe("Aliases Service API", function() {

  describe("aliasauthenticate", function () {
    it("Returns privkey when authenticating with valid alias and password", function (done) {
      var url = Config.HOST + "aliasauthenticate";
      var requestOptions = AuthHelper.requestOptions();
      requestOptions.qs = {
        "alias": Config.TEST_ALIAS,
        "password": Config.TEST_ALIAS_PASSWORD
      };

      rp(url, requestOptions).then(function (result) {
        expect(result.statusCode).to.equal(200);

        var privkey = JSON.parse(result.body);
        expect(privkey.privatekey).to.exist;
        done();
      });
    });
  });

  describe("aliashistory", function () {
    it("Returns history information for a given alias", function (done) {
      var url = Config.HOST + "aliashistory";
      var requestOptions = AuthHelper.requestOptions();
      requestOptions.qs = {
        "aliasname": Config.TEST_ALIAS
      };

      rp(url, requestOptions).then(function (result) {
        expect(result.statusCode).to.equal(200);

        var aliasHistoryList = JSON.parse(result.body);
        for(var i = 0; i < aliasHistoryList.length; i++) {
          expect(aliasHistoryList[i].type).to.exist;
          expect(aliasHistoryList[i].balance).to.be.at.least(0);
        }
        done();
      });
    });
  });

  describe("aliasinfo", function () {
    it("Returns info for alias", function (done) {
      var url = Config.HOST + "aliasinfo";
      var requestOptions = AuthHelper.requestOptions();
      requestOptions.qs = {
        "aliasname": Config.TEST_ALIAS
      };

      rp(url, requestOptions).then(function (result) {
        expect(result.statusCode).to.equal(200);

        var alias = JSON.parse(result.body);
        expect(alias.name).to.exist;
        expect(alias.balance).to.be.at.least(0);
        done();
      });
    });
  });

  describe("aliaslist", function () {
    it("Returns all aliases this wallet controls", function (done) {
      var url = Config.HOST + "aliaslist";
      var requestOptions = AuthHelper.requestOptions();

      rp(url, requestOptions).then(function (result) {
        expect(result.statusCode).to.equal(200);

        var aliasList = JSON.parse(result.body);
        for(var i = 0; i < aliasList.length; i++) {
          expect(aliasList[i].name).to.exist;
          expect(aliasList[i].balance).to.be.at.least(0);
        }
        done();
      });
    });
  });

  describe("aliasnew", function () {
    it("Returns alias tx id and guid", function (done) {
      var url = Config.HOST + "aliasnew";
      var requestOptions = AuthHelper.requestOptions();
      requestOptions.method =  "POST";
      requestOptions.json = {
        "aliaspeg": Config.TEST_ALIAS_PEG,
        "aliasname": Config.TEST_ALIAS + Date.now().toString() + ".test",
        "publicvalue": "test public value",
        "privatevalue": "test private value",
        "password": "",
        "safesearch": "Yes",
        "accepttransfers": "Yes",
        "expire": "10000",
        "nrequired": 0,
        "aliases": []
      };

      rp(url, requestOptions).then(function (result) {
        expect(result.statusCode).to.equal(200);
        var newAliasInfo = result.body;
        VerifyHelper.verifyTransactionId(newAliasInfo[0]);
        VerifyHelper.verifyAliasNewTransactionId(newAliasInfo[1]);
        done();
      });
    });
  });

  describe("aliasupdate", function () {
    it("Returns update txid", function (done) {
      var url = Config.HOST + "aliasupdate";
      var requestOptions = AuthHelper.requestOptions();
      requestOptions.method =  "POST";
      requestOptions.json = {
        "aliaspeg": Config.TEST_ALIAS_PEG,
        "aliasname": Config.TEST_ALIAS,
        "publicvalue": "test public value " + Date.now().toString()
      };

      rp(url, requestOptions).then(function (result) {
        expect(result.statusCode).to.equal(200);
        var txid = result.body[0];
        VerifyHelper.verifyTransactionId(txid);
        done();
      });
    });
  });
});