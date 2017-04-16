var expect  = require("chai").expect;
var rp = require("request-promise");

var AuthHelper = require("./helper/authHelper");
var DataHelper = require("./helper/dataHelper");
var VerifyHelper = require("./helper/verifyHelper");
var Config = require("../../spec/config");

describe("Messaging Service API", function() {

  describe("messageinfo", function () {
    it("Returns info about a message", function (done) {
      var url = Config.HOST + "messageinfo";
      var requestOptions = AuthHelper.requestOptions();
      requestOptions.qs = {
        "guid": Config.TEST_MESSAGE_GUID
      };

      rp(url, requestOptions).then(function (result) {
        expect(result.statusCode).to.equal(200);

        var messageInfo = JSON.parse(result.body);
        expect(messageInfo.subject).to.exist;
        expect(messageInfo.message).to.exist;
        VerifyHelper.verifySyscoinGUID(messageInfo.GUID);
        done();
      });
    });
  });

  describe("messagenew", function () {
    it("Returns txid of new message tx", function (done) {
      var url = Config.HOST + "messagenew";
      var requestOptions = AuthHelper.requestOptions();
      requestOptions.method =  "POST";
      requestOptions.json = {
        "subject": "testing",
        "message": "testing unit testing",
        "fromalias": Config.TEST_ALIAS,
        "toalias": Config.TEST_ALIAS
      };

      rp(url, requestOptions).then(function (result) {
        expect(result.statusCode).to.equal(200);

        var messageInfo = result.body;
        VerifyHelper.verifyTransactionId(messageInfo[0]);
        VerifyHelper.verifySyscoinGUID(messageInfo[1]);
        done();
      });
    });
  });

  describe("messagereceivelist", function () {
    it("Returns list of all recieved messages", function (done) {
      var url = Config.HOST + "messagereceivelist";
      var requestOptions = AuthHelper.requestOptions();

      rp(url, requestOptions).then(function (result) {
        expect(result.statusCode).to.equal(200);

        var messageList = JSON.parse(result.body);
        expect(messageList.length).to.be.at.least(0);
        for(var i = 0; i < messageList.length; i++) {
          expect(messageList[i].message).to.exist;
          VerifyHelper.verifySyscoinGUID(messageList[i].GUID);
        }
        done();
      });
    });
  });

  describe("messagesentlist", function () {
    it("Returns list of all sent messages", function (done) {
      var url = Config.HOST + "messagesentlist";
      var requestOptions = AuthHelper.requestOptions();

      rp(url, requestOptions).then(function (result) {
        expect(result.statusCode).to.equal(200);

        var messageList = JSON.parse(result.body);
        expect(messageList.length).to.be.at.least(0);
        for(var i = 0; i < messageList.length; i++) {
          expect(messageList[i].message).to.exist;
          VerifyHelper.verifySyscoinGUID(messageList[i].GUID);
        }
        done();
      });
    });
  });
});