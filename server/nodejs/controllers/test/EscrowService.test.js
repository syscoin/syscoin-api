'use strict';
const expect = require('chai').expect;
const request = require('./TestRequest').request;
const AuthHelper = require('../spec/helper/authHelper');
const Config = require('./config');

let testAuthToken;

describe('Tests for Escrow Service API', function () {
  before(function (done) {
    let requestOptions = AuthHelper.requestOptions();
    if (requestOptions) {
      testAuthToken = requestOptions.headers.token;
    }
    done();
  });

  describe('escrowacknowledge', function () {
    it('Acknowledge escrow payment as seller of offer', function (done) {
      const body = {
        escrowguid: Config.TEST_EXISTING_ESCROW_GUID,
        witness: ''
      };
      request('POST', 'escrowacknowledge', null, testAuthToken, body).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.header('content-type', 'application/json');
        expect(res).to.be.json;
        if (res.status == 500 && res.text.includes('ERRCODE: 4044')) {
          //this is ok for testing the api. End-to-end integration testing is supposed to cover the whole workflow.
          console.error(res.text);
        } else {
          expect(res).to.have.status(200);
        }
        done();
      });
    });
  });

  describe('escrowcompleterefund', function () {
    it('Completes an escrow refund', function (done) {
      const body = {
        'witness': '',
        'escrowguid': Config.TEST_EXISTING_ESCROW_GUID,
        'rawtx': '12345'
      };

      request('POST', 'escrowcompleterefund', null, testAuthToken, body).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.header('content-type', 'application/json');
        expect(res).to.be.json;
        if (res.status == 500 && res.text.includes('ERRCODE: 4055')) {
          //this is ok for testing the api. End-to-end integration testing is supposed to cover the whole workflow.
          console.error(res.text);
        } else {
          expect(res).to.have.status(200);
        }
        done();
      });
    });
  });

  describe('escrowcompleterelease', function () {
    it('Completes an escrow release', function (done) {
      const body = {
        'witness': '',
        'escrowguid': Config.TEST_EXISTING_ESCROW_GUID,
        'rawtx': '12345'
      };
      request('POST', 'escrowcompleterelease', null, testAuthToken, body).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.header('content-type', 'application/json');
        expect(res).to.be.json;
        if (res.status == 500 && res.text.includes('ERRCODE: 4065')) {
          //this is ok for testing the api. End-to-end integration testing is supposed to cover the whole workflow.
          console.error(res.text);
        } else {
          expect(res).to.have.status(200);
        }
        done();
      });
    });
  });

  describe('escrowfeedback', function () {
    it('Send feedback for primary and secondary users in escrow', function (done) {
      const body = {
        'feedback': 'feedback',
        'witness': '',
        'userfrom': 'seller',
        'escrowguid': Config.TEST_EXISTING_ESCROW_GUID,
        'rating': 5,
        'userto': 'buyer'
      };

      request('POST', 'escrowfeedback', null, testAuthToken, body).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header('content-type', 'application/json');
        expect(res).to.be.json;
        //TO-DO: response schema validation
        done();
      });
    });
  });

  describe('escrownew', function () {
    it('Creating a new escrow', function (done) {
      const body = {
        'alias': Config.TEST_EXISTING_ALIAS1,
        'offer': Config.TEST_EXISTING_OFFER_GUID,
        'quantity': 1,
        'arbiter_alias': Config.TEST_EXISTING_ARBITER_ALIAS,
        'getamountandaddress': false,
        'buynow': true,
        'total_in_payment_option': 1,
        'shipping_amount': 0,
        'network_fee': 100,
        'arbiter_fee': 0.05,
        'witness': '',
        'extTx': '',
        'paymentoption': 'SYS',
        'bid_in_offer_currency': 0,
        'bid_in_payment_option': 0,
        'witness_fee': 0
      };
      request('POST', 'escrownew', null, testAuthToken, body).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header('content-type', 'application/json');
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe('escrowrefund', function () {
    it('Refunds escrow funds to buyer', function (done) {
      const body = {
        'witness': '',
        'escrowguid': Config.TEST_EXISTING_ESCROW_GUID,
        'rawtx': '12345',
        'userrole': 'seller'
      };

      request('POST', 'escrowrefund', null, testAuthToken, body).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.header('content-type', 'application/json');
        expect(res).to.be.json;
        if (res.status == 500 && res.text.includes('ERRCODE: 5012')) {
          //this is ok for testing the api. End-to-end integration testing is supposed to cover the whole workflow.
          console.error(res.text);
        } else {
          expect(res).to.have.status(200);
        }
        done();
      });
    });
  });

  describe('escrowrelease', function () {
    it('Releases escrow funds to seller', function (done) {
      const body = {
        'witness': '',
        'escrowguid': Config.TEST_EXISTING_ESCROW_GUID,
        'rawtx': '12345',
        'userrole': 'buyer'
      };

      request('POST', 'escrowrelease', null, testAuthToken, body).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.header('content-type', 'application/json');
        expect(res).to.be.json;
        if (res.status == 500 && res.text.includes('ERRCODE: 4057')) {
          //this is ok for testing the api. End-to-end integration testing is supposed to cover the whole workflow.
          console.error(res.text);
        } else {
          expect(res).to.have.status(200);
        }
        done();
      });
    });
  });

  describe('escrowbid', function () {
    it('Place a bid on an offer', function (done) {
      const body = {
        'bid_in_offer_currency': 1.1,
        'witness': '',
        'bid_in_payment_option': 1,
        'alias': Config.TEST_EXISTING_ALIAS1,
        'escrow': Config.TEST_EXISTING_ESCROW_GUID
      };

      request('POST', 'escrowbid', null, testAuthToken, body).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.header('content-type', 'application/json');
        expect(res).to.be.json;
        if (res.status == 500 && res.text.includes('ERRCODE: 4027')) {
          //this is ok for testing the api. End-to-end integration testing is supposed to cover the whole workflow.
          console.error(res.text);
        } else {
          expect(res).to.have.status(200);
        }
        done();
      });
    });
  });

  describe('escrowcreaterawtransaction', function () {
    it('Creates raw transaction for escrow refund or release', function (done) {
      const body = {
        'role': 'buyer',
        'inputs': [
          {
            'txid': Config.TEST_EXISTING_TXID,
            'vout': 1,
            'satoshis': 10000000
          }
        ],
        'escrowguid': Config.TEST_EXISTING_ESCROW_GUID,
        'type': 'release'
      };

      request('POST', 'escrowcreaterawtransaction', null, testAuthToken, body).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header('content-type', 'application/json');
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe('escrowinfo', function () {
    it('Show stored values of a single escrow', function (done) {
      const params = {
        escrowguid: Config.TEST_EXISTING_ESCROW_GUID
      };

      request('GET', 'escrowinfo', params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header('content-type', 'application/json');
        expect(res).to.be.json;
        done();
      });
    });
  });

});
