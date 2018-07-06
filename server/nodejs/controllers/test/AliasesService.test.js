'use strict';
const expect = require('chai').expect;
const request = require('./TestRequest').request;
const AuthHelper = require('../spec/helper/authHelper');
const Config = require('./config');

let testAuthToken;

describe('Tests for Aliases Service API', function () {

  before(function (done) {
    let requestOptions = AuthHelper.requestOptions();
    if (requestOptions) {
      testAuthToken = requestOptions.headers.token;
    }
    done();
  });

  describe('aliasbalance', function () {
    it('Returns balance for alias', function (done) {

      const params = { 'alias': Config.TEST_EXISTING_ALIAS1 };

      request('GET', 'aliasbalance', params, testAuthToken)
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res).to.have.header('content-type', 'application/json');
          expect(res).to.be.json;
          //TO-DO: response schema validation
          done();
        });
    });
  });

  describe('aliasinfo', function () {
    it('Returns information about an alias', function (done) {

      const params = { 'aliasname': Config.TEST_EXISTING_ALIAS1 };

      request('GET', 'aliasinfo', params, testAuthToken)
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res).to.have.header('content-type', 'application/json');
          expect(res).to.be.json;
          //TO-DO: response schema validation
          done();
        });
    });
  });

  describe('aliasnew', function () {
    it.skip('Creates a new Syscoin alias', function (done) {

      const body = {
        'aliasname': 'testalias',
        'publicvalue': 'public value',
        'accept_transfers_flags': 1,
        'expire_timestamp': 1560902147,
        'address': Config.TEST_EXISTING_ADDRESS1,
        'encryption_privatekey': '12345',
        'encryption_publickey': '12345',
        'witness': ''
      };

      request('POST', 'aliasnew', null, testAuthToken, body)
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res).to.have.header('content-type', 'application/json');
          expect(res).to.be.json;
          //TO-DO: response schema validation
          done();
        });
    });
  });

  describe('aliaspay', function () {
    it('Send from an alias', function (done) {

      const body = {
        'aliasfrom': Config.TEST_EXISTING_ALIAS1,
        'amounts':
        {
          [Config.TEST_EXISTING_ADDRESS1]: 0.001
        },
        'instantsend': true,
        'subtractfeefromamount': []
      };

      request('POST', 'aliaspay', null, testAuthToken, body)
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res).to.have.header('content-type', 'application/json');
          expect(res).to.be.json;
          //TO-DO: response schema validation
          done();
        });
    });
  });

  describe('aliasupdate', function () {
    it('Updates alias', function (done) {

      const body = {
        'aliasname': Config.TEST_EXISTING_ALIAS1,
        'publicvalue': 'updated public value',
        'address': Config.TEST_EXISTING_ADDRESS1,
        'accept_transfers_flags': 1,
        'expire_timestamp': 1560902147,
        'encryption_privatekey': '12345',
        'encryption_publickey': '12345',
        'witness': ''
      };

      request('POST', 'aliasupdate', null, testAuthToken, body)
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res).to.have.header('content-type', 'application/json');
          expect(res).to.be.json;
          //TO-DO: response schema validation
          done();
        });
    });
  });

  describe('aliaswhitelist', function () {
    it('List all affiliates for this alias (white list)', function (done) {

      const params = { 'aliasname': Config.TEST_EXISTING_ALIAS1 };

      request('GET', 'aliaswhitelist', params, testAuthToken, null)
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res).to.have.header('content-type', 'application/json');
          expect(res).to.be.json;
          //TO-DO: response schema validation
          done();
        });
    });
  });

  describe('aliasclearwhitelist', function () {
    it('Clear aliases\' whitelist', function (done) {

      const body = {
        'owneralias': Config.TEST_EXISTING_ALIAS1,
        'witness': ''
      };

      request('POST', 'aliasclearwhitelist', null, testAuthToken, body)
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.header('content-type', 'application/json');
          expect(res).to.be.json;
          if (res.status == 500 && res.text.includes('ERRCODE: 5026')) {
            //this is ok for testing the api. End-to-end integration testing is supposed to cover the whole workflow.
            console.error(res.text);
          } else {
            expect(res).to.have.status(200);
          }
          done();
        });
    });
  });

  describe('aliasupdatewhitelist', function () {
    it('Update to the whitelist', function (done) {

      const body = {
        'owneralias': Config.TEST_EXISTING_ALIAS1,
        'entries': [
          {
            'alias': 'test',
            'discount_percentage': 1
          }
        ],
        'witness': ''
      };

      request('POST', 'aliasupdatewhitelist', null, testAuthToken, body)
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res).to.have.header('content-type', 'application/json');
          expect(res).to.be.json;
          //TO-DO: response schema validation
          done();
        });
    });
  });

  /* not clear yet how the request looks like*/
  describe('syscointxfund', function () {
    it('Funds a new syscoin transaction', function (done) {

      const body = {
        'hexstring': Config.TEST_TRX_HEX_STRING
      };

      request('POST', 'syscointxfund', null, testAuthToken, body)
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res).to.have.header('content-type', 'application/json');
          expect(res).to.be.json;
          //TO-DO: response schema validation
          done();
        });
    });
  });

  describe('aliasaddscript', function () {
    it('Add redeemscript to alias', function (done) {

      const body = {
        'script': '12345'
      };

      request('POST', 'aliasaddscript', null, testAuthToken, body)
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res).to.have.header('content-type', 'application/json');
          expect(res).to.be.json;
          //TO-DO: response schema validation
          done();
        });
    });
  });
});