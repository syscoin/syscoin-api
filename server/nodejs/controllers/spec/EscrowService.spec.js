var expect  = require('chai').expect;
var rp = require('request-promise');

var AuthHelper = require('./helper/authHelper');
var DataHelper = require('./helper/dataHelper');
var Config = require('../../spec/config');

describe('Escrow Service API', function() {

  describe('escrowhistory', function () {
    this.timeout(60 * 1000); //increase timeout in the case of long escrow history
    it('Returns history of given escrow', function (done) {
      var url = Config.HOST + 'escrowhistory';
      var requestOptions = AuthHelper.requestOptions();
      requestOptions.qs = {
        'escrow': Config.TEST_ESCROW_GUID
      };

      rp(url, requestOptions).then(function (result) {
        expect(result.statusCode).to.equal(200);

        var escrowHistoryList = JSON.parse(result.body);
        expect(escrowHistoryList.length).to.be.at.least(1);
        for(var i = 0; i < escrowHistoryList.length; i++) {
          expect(escrowHistoryList[i].escrowtype).to.exist;
          expect(escrowHistoryList[i].quantity).to.be.at.least(1);
          expect(escrowHistoryList[i].price).to.be.at.least(0);
        }
        done();
      });
    });
  });

  describe('escrowinfo', function () {
    it('Returns info about escrow', function (done) {
      var url = Config.HOST + 'escrowinfo';
      var requestOptions = AuthHelper.requestOptions();
      requestOptions.qs = {
        'escrow': Config.TEST_ESCROW_GUID
      };

      rp(url, requestOptions).then(function (result) {
        expect(result.statusCode).to.equal(200);

        var escrow = JSON.parse(result.body);
        expect(escrow.escrowtype).to.exist;
        expect(escrow.height).to.be.at.least(1);
        done();
      });
    });
  });

  describe('escrowlist', function () {
    this.timeout(60 * 1000); //increase timeout in the case of long escrow history
    it('Returns list of all escrows', function (done) {
      var url = Config.HOST + 'escrowlist';
      var requestOptions = AuthHelper.requestOptions();
      requestOptions.qs = {
        'aliases': [Config.TEST_ALIAS]
      };

      rp(url, requestOptions).then(function (result) {
        expect(result.statusCode).to.equal(200);

        var escrowList = JSON.parse(result.body);
        expect(escrowList.length).to.be.at.least(1);
        for(var i = 0; i < escrowList.length; i++) {
          expect(escrowList[i].escrow).to.exist;
          expect(escrowList[i].total).to.be.at.least(0);
        }
        done();
      });
    });
  });

  describe('escrownew', function () {
    it('Returns a tx id and guid of new escrow', function (done) {
      DataHelper.escrowNew(Config.TEST_ALIAS, Config.TEST_OFFER_GUID, 1, 'buying with escrow via unit test', Config.TEST_ALIAS).then(function(result){
        expect(result.response.statusCode).to.equal(200);
        expect(result.tx.length).to.equal(2);
        expect(result.tx[0].length).to.equal(64); //tx id
        expect(result.tx[1].length).to.equal(16); //escrow guid
        done();
      });
    });
  });
});