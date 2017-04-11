var expect  = require("chai").expect;
var rp = require("request-promise");

var AuthHelper = require("./helper/authHelper");
var VerifyHelper = require("./helper/verifyHelper");
var Config = require("../../spec/config");

describe("Certificate Service API", function() {

  describe("certhistory", function () {
    it("Returns history info for certificate", function (done) {
      var url = Config.HOST + "certhistory";
      var requestOptions = AuthHelper.requestOptions();
      requestOptions.qs = {
        "certname": Config.TEST_CERT_GUID
      };

      rp(url, requestOptions).then(function (result) {
        expect(result.statusCode).to.equal(200);

        var certHistoryList = JSON.parse(result.body);
        for(var i = 0; i < certHistoryList.length; i++) {
          expect(certHistoryList[i].certtype).to.exist;
          expect(certHistoryList[i].height).to.be.at.least(1);
        }
        done();
      });
    });
  });

  describe("certinfo", function () {
    it("Returns info about certificate", function (done) {
      var url = Config.HOST + "certinfo";
      var requestOptions = AuthHelper.requestOptions();
      requestOptions.qs = {
        "guid": Config.TEST_CERT_GUID
      };

      rp(url, requestOptions).then(function (result) {
        expect(result.statusCode).to.equal(200);

        var cert = JSON.parse(result.body);
        expect(cert.title).to.exist;
        expect(cert.height).to.be.at.least(1);
        done()
      });
    });
  });

  describe("certlist", function () {
    it("Returns list of all certificates this wallet owns", function (done) {
      var url = Config.HOST + "certlist";
      var requestOptions = AuthHelper.requestOptions();
      requestOptions.qs = {
        "aliases": [Config.TEST_ALIAS]
      };

      rp(url, requestOptions).then(function (result) {
        expect(result.statusCode).to.equal(200);

        var certList = JSON.parse(result.body);
        expect(certList.length).to.be.at.least(1);
        for(var i = 0; i < certList.length; i++) {
          expect(certList[i].title).to.exist;
          expect(certList[i].height).to.be.at.least(1);
        }
        done();
      });
    });
  });

  describe("certnew", function () {
    it("Returns tx id and guid of new certificate", function (done) {
      var url = Config.HOST + "certnew";
      var requestOptions = AuthHelper.requestOptions();
      requestOptions.method =  "POST";
      requestOptions.json = {
        "alias": Config.TEST_ALIAS,
        "title": "Unit Test Cert " + Date.now().toString(),
        "private": "Some private date",
        "public": "Some public data",
        "safesearch": "Yes",
        "category": "certificates"
      };

      rp(url, requestOptions).then(function (result) {
        expect(result.statusCode).to.equal(200);
        var newCertInfo = result.body;
        VerifyHelper.verifyTransactionId(newCertInfo[0]);
        VerifyHelper.verifySyscoinGUID(newCertInfo[1]);
        done();
      });
    });
  });

  describe("certupdate", function () {
    it("Returns certificate update tx id", function (done) {
      var url = Config.HOST + "certupdate";
      var requestOptions = AuthHelper.requestOptions();
      requestOptions.method =  "POST";
      requestOptions.json = {
        "guid": Config.TEST_CERT_GUID,
        "alias": Config.TEST_ALIAS,
        "title": "Unit Test Cert",
        "private": "Private date " + Date.now().toString(),
        "public": "Public data" + Date.now().toString(),
        "safesearch": "Yes",
        "category": "certificates" /* MUST BE THIS STRING! */
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