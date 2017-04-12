var expect  = require("chai").expect;
var rp = require("request-promise");

var AuthHelper = require("./helper/authHelper");
var VerifyHelper = require("./helper/verifyHelper");
var DataHelper = require("./helper/dataHelper");
var Config = require("../../spec/config");

describe("Escrow Service API", function() {

  describe("escrowclaimrelease", function () {
    it("Returns tx id for escrow release", function (done) {
    });
  });

  describe("escrowcompleterelease", function () {
    it("Returns tx id for completed escrow release", function (done) {
    });
  });

  describe("escrowfeedback", function () {
    it("Returns tx id for compeleted feedback", function (done) {
    });
  });

  describe("escrowhistory", function () {
    it("Returns history of given escrow", function (done) {
      var url = Config.HOST + "escrowhistory";
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

  describe("escrowinfo", function () {
    it("Returns info about escrow", function (done) {
      var url = Config.HOST + "escrowinfo";
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

  describe("escrowlist", function () {
    it("Returns list of all escrows", function (done) {
      var url = Config.HOST + "escrowlist";
      var requestOptions = AuthHelper.requestOptions();
      requestOptions.qs = {
        "guid": [Config.TEST_ALIAS]
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

  describe.only("escrownew", function () {
    it("Returns a tx id and guid of new escrow", function (done) {
      var url = Config.HOST + "escrownew";
      var requestOptions = AuthHelper.requestOptions();
      requestOptions.method =  "POST";
      requestOptions.json = {
        "alias": Config.TEST_ALIAS,
        "offer": Config.TEST_OFFER_GUID,
        "quantity": 1,
        "message": "unit test escrow",
        "arbiter": Config.TEST_ALIAS
      };

      rp(url, requestOptions).then(function(result) {
        //expect(result.statusCode).to.equal(200);
        //expect(result.body.length).to.equal(2);
        //expect(result.body[0].length).to.equal(64); //tx id
        //expect(result.body[1].length).to.equal(16); //offer guid
        done();
      });
    });
  });

  describe("escrowrelease", function () {
    it("Returns a txid for the released escrow", function (done) {
    });
  });
  
});