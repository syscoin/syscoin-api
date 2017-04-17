var expect  = require("chai").expect;
var rp = require("request-promise");

var AuthHelper = require("./helper/authHelper");
var VerifyHelper = require("./helper/verifyHelper");
var DataHelper = require("./helper/dataHelper");
var Config = require("../../spec/config");

describe("Offer Service API", function() {

  describe.only("offeraccept", function () {
    it("Returns txid and guid of offeraccept", function (done) {
      //because this test may run after Alias tests, wait for confirmation on prev
      //  txs
      this.timeout(60 * 3 * 1000);
      setTimeout(function() {
        DataHelper.offerAccept(Config.TEST_ALIAS, Config.TEST_OFFER_GUID, 1,
          "test accept " + Date.now().toString(), "", "").then(function(acceptResult) {
          expect(acceptResult.response.statusCode).to.equal(200);

          var acceptInfo = acceptResult.tx;
          VerifyHelper.verifyTransactionId(acceptInfo[0]);
          VerifyHelper.verifySyscoinGUID(acceptInfo[1]);
          done();
        });
      }, 60 * 2 * 1000);
    });
  });

  describe.only("offeracceptfeedback", function () {
    it("Returns txid of feedback tx (dependent on confirmations, which may result in false failures)", function (done) {
      //because this test may run after Alias tests AND after Offer accept tests,
      // wait for confirmation on prev txs
      this.timeout(60 * 8 * 1000);
      setTimeout(function() {
        DataHelper.offerAccept(Config.TEST_ALIAS, Config.TEST_OFFER_GUID, 1,
          "test accept " + Date.now().toString(), "", "").then(function(acceptResult) {
          console.log("Waiting for confimations on offerAccept...");
          setTimeout(function() {
            var url = Config.HOST + "offeracceptfeedback";
            var requestOptions = AuthHelper.requestOptions();
            requestOptions.method =  "POST";
            requestOptions.qs = {
              "offerguid": Config.TEST_OFFER_GUID,
              "offeracceptguid": acceptResult.tx[1],
              "feedback": "Unit test feedback",
              "rating": 5
            };

            rp(url, requestOptions).then(function(result) {
              expect(result.statusCode).to.equal(200);
              expect(result.body.length).to.equal(68); //accept feedback tx id
              done();
            });
          }, 60 * 3 * 1000); //wait 2min for a confirm on the offeraccept before attempting to place feedback
        });
      }, 60 * 3 * 1000); //wait 2min for any prev txs to confirm
    });
  });

  describe("offeracceptlist", function () {
    it("Returns list of accepted offers", function (done) {
      var url = Config.HOST + "offeracceptlist";
      var requestOptions = AuthHelper.requestOptions();
      requestOptions.qs = {
        "aliases": [Config.TEST_ALIAS]
      };

      rp(url, requestOptions).then(function (result) {
        expect(result.statusCode).to.equal(200);

        var offerList = JSON.parse(result.body);
        expect(offerList.length).to.be.at.least(1);
        for(var i = 0; i < offerList.length; i++) {
          expect(offerList[i].offer).to.exist;
          expect(offerList[i].total).to.be.at.least(0);
        }
        done();
      });
    });
  });

  describe("offerhistory", function () {
    it("Returns history of offer", function (done) {
      var url = Config.HOST + "offerhistory";
      var requestOptions = AuthHelper.requestOptions();
      requestOptions.qs = {
        "offer": Config.TEST_OFFER_GUID
      };

      rp(url, requestOptions).then(function (result) {
        expect(result.statusCode).to.equal(200);

        var offerHistoryList = JSON.parse(result.body);
        expect(offerHistoryList.length).to.be.at.least(1);
        for(var i = 0; i < offerHistoryList.length; i++) {
          expect(offerHistoryList[i].offertype).to.exist;
          expect(offerHistoryList[i].height).to.be.at.least(1);
          expect(offerHistoryList[i].price).to.be.at.least(0);
        }
        done();
      });
    });
  });

  describe("offerinfo", function () {
    it("Returns offer details", function (done) {
      var url = Config.HOST + "offerinfo";
      var requestOptions = AuthHelper.requestOptions();
      requestOptions.qs = {
        "guid": Config.TEST_OFFER_GUID
      };

      rp(url, requestOptions).then(function (result) {
        expect(result.statusCode).to.equal(200);

        var offer = JSON.parse(result.body);
        expect(offer.title).to.exist;
        expect(offer.height).to.be.at.least(1);
        done()
      });
    });
  });

  describe("offerlist", function () {
    it("Returns list of offers owned by wallet", function (done) {
      var url = Config.HOST + "offerlist";
      var requestOptions = AuthHelper.requestOptions();
      requestOptions.qs = {
        "aliases": [Config.TEST_ALIAS]
      };

      rp(url, requestOptions).then(function (result) {
        expect(result.statusCode).to.equal(200);

        var offerList = JSON.parse(result.body);
        expect(offerList.length).to.be.at.least(1);
        for(var i = 0; i < offerList.length; i++) {
          expect(offerList[i].title).to.exist;
          expect(offerList[i].height).to.be.at.least(1);
          expect(offerList[i].price).to.be.at.least(0);
        }
        done();
      });
    });
  });

  describe("offernew", function() {
    var url = "http://localhost:8001/offernew";

    it("Returns an array with the tx id and offer guid", function(done) {
      var requestOptions = AuthHelper.requestOptions();
      requestOptions.method =  "POST";
      requestOptions.json = {
        "alias": "testuser",
        "category": "unit testing",
        "title": "title here",
        "quantity": 10,
        "price": 1,
        "description": "Description goes here",
        "currency": "SYS",
        "certguid": "",
        "paymentoptions": "SYS",
        "geolocation": "",
        "safesearch": "Yes",
        "private": true
      };

      rp(url, requestOptions).then(function(result) {
        expect(result.statusCode).to.equal(200);
        expect(result.body.length).to.equal(2);
        expect(result.body[0].length).to.equal(64); //tx id
        expect(result.body[1].length).to.equal(16); //offer guid
        done();
      });
    });
  });

  describe("offerupdate", function() {
    var url = "http://localhost:8001/offerupdate";

    it("Returns an array with the tx id", function(done) {
      var requestOptions = AuthHelper.requestOptions();
      requestOptions.method =  "POST";
      requestOptions.json = {
        "alias": "testuser",
        "guid": "1c3889997c39e979",
        "category": "unit testing",
        "title": "title here updated",
        "quantity": 10,
        "price": 1,
        "description": "Description goes here updated",
        "currency": "SYS",
        "certguid": "",
        "paymentoptions": "SYS",
        "geolocation": "",
        "safesearch": "Yes",
        "private": true,
        "comission": 0
      };

      rp(url, requestOptions).then(function(result) {
        expect(result.statusCode).to.equal(200);
        expect(result.body.length).to.equal(1);
        expect(result.body[0].length).to.equal(64); //tx id
        done();
      });
    });
  });

  describe("offerwhitelist", function () {
    it("Returns whitelist info for an offer", function (done) {
      var url = Config.HOST + "offerwhitelist";
      var requestOptions = AuthHelper.requestOptions();
      requestOptions.qs = {
        "offerguid": [Config.TEST_OFFER_GUID]
      };

      rp(url, requestOptions).then(function (result) {
        expect(result.statusCode).to.equal(200);

        var offerWhitelist = JSON.parse(result.body);
        expect(offerWhitelist.length).to.be.at.least(0);
        done();
      });
    });
  });
});