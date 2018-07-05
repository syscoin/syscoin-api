'use strict';
const expect = require('chai').expect;
const request = require('./TestRequest').request;
const AuthHelper = require('../spec/helper/authHelper');
const Config = require('./config');

let testAuthToken;

describe('Tests for Asset Service API', function () {

  before(function (done) {
    let requestOptions = AuthHelper.requestOptions();
    if (requestOptions) {
      testAuthToken = requestOptions.headers.token;
    }
    done();
  });

  describe('assetallocationcollectinterest', function () {
    it('Collect interest on this asset', function (done) {

      const body = {
        'asset': Config.TEST_EXISTING_ASSET_AMOUNTS_GUID,
        'alias': Config.TEST_EXISTING_ALIAS2,
        'witness': ''
      };

      request('POST', 'assetallocationcollectinterest', null, testAuthToken, body)
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.header('content-type', 'application/json');
          expect(res).to.be.json;
          if (res.status == 500 && res.text.includes('ERRCODE: 1013')) {
            //this is ok for testing the api. End-to-end integration testing is supposed to cover the whole workflow.
            console.error(res.text);
          } else {
            expect(res).to.have.status(200);
          }
          done();
        });
    });
  });

  describe('assetinfo', function () {
    it('Show stored values of a single asset', function (done) {

      const params = {
        'asset': Config.TEST_EXISTING_ASSET_RANGES_GUID,
        'getinputs': true,
      };

      request('GET', 'assetinfo', params, testAuthToken)
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

  describe('assetsend ranges', function () {
    it('Send an asset you own to another alias as an asset allocation (use ranges)', function (done) {

      const body = {
        'asset': Config.TEST_EXISTING_ASSET_RANGES_GUID,
        'aliasfrom': Config.TEST_EXISTING_ALIAS1,
        'memo': 'sending asset to ' + Config.TEST_EXISTING_ALIAS2,
        'witness': '',
        'amounts': [
          {
            'aliasto': Config.TEST_EXISTING_ALIAS2,
            'ranges': [
              {
                'start': 55,
                'end': 55
              }
            ]
          }
        ]
      };

      request('POST', 'assetsend', null, testAuthToken, body)
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

  describe('assetsend amounts', function () {
    it('Send an asset you own to another alias as an asset allocation (use amounts)', function (done) {

      const body = {
        'asset': Config.TEST_EXISTING_ASSET_AMOUNTS_GUID,
        'aliasfrom': Config.TEST_EXISTING_ALIAS1,
        'memo': 'sending asset to ' + Config.TEST_EXISTING_ALIAS2,
        'witness': '',
        'amounts': [
          {
            'aliasto': Config.TEST_EXISTING_ALIAS2,
            'amount': 3
          }
        ]
      };

      request('POST', 'assetsend', null, testAuthToken, body)
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

  describe('assetallocationinfo', function () {
    it('Show stored values of a single asset allocation', function (done) {

      const params = {
        'asset': Config.TEST_EXISTING_ASSET_AMOUNTS_GUID,
        'alias': Config.TEST_EXISTING_ALIAS2,
        'getinputs': true
      };

      request('GET', 'assetallocationinfo', params, testAuthToken)
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

  describe('assetallocationsend', function () {
    it('Send an asset allocation you own to another alias (use amounts)', function (done) {

      const body = {
        'asset': Config.TEST_EXISTING_ASSET_AMOUNTS_GUID,
        'aliasfrom': Config.TEST_EXISTING_ALIAS2,
        'amounts': [
          {
            'aliasto': Config.TEST_EXISTING_ALIAS1,
            'amount': 1
          }
        ],
        'memo': 'sending asset to ' + Config.TEST_EXISTING_ALIAS1,
        'witness': ''
      };

      request('POST', 'assetallocationsend', null, testAuthToken, body)
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res).to.have.header('content-type', 'application/json');
          expect(res).to.be.json;
          //TO-DO: response schema validation
          done();
        });
    });

    it('Send an asset allocation you own to another alias (use ranges)', function (done) {

      const body = {
        'asset': Config.TEST_EXISTING_ASSET_RANGES_GUID,
        'aliasfrom': Config.TEST_EXISTING_ALIAS2,
        'memo': 'sending asset to ' + Config.TEST_EXISTING_ALIAS1,
        'witness': '',
        'amounts': [
          {
            'aliasto': Config.TEST_EXISTING_ALIAS1,
            'ranges': [
              {
                'start': 2,
                'end': 2
              }
            ]
          }
        ]
      };

      request('POST', 'assetallocationsend', null, testAuthToken, body)
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

  describe('assetallocationsenderstatus', function () {
    it('Show status as it pertains to any current Z-DAG conflicts...', function (done) {

      const params = {
        'asset': Config.TEST_EXISTING_ASSET_RANGES_GUID,
        'sender': Config.TEST_EXISTING_ALIAS1,
        'txid': Config.TEST_EXISTING_TXID
      };

      request('GET', 'assetallocationsenderstatus', params, testAuthToken, null)
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

  describe('assettransfer', function () {
    it('Transfer a asset allocation you own to another alias', function (done) {

      const body = {
        'asset': Config.TEST_EXISTING_ASSET_AMOUNTS_GUID,
        'alias': Config.TEST_EXISTING_ALIAS1,
        'witness': ''
      };

      request('POST', 'assettransfer', null, testAuthToken, body)
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

  describe('assetupdate', function () {
    it('Perform an update on an asset you control', function (done) {

      const body = {
        'asset': Config.TEST_EXISTING_ASSET_RANGES_GUID,
        'supply': 10,
        'category': 'assets > assets',
        'publicvalue': 'updated asset',
        'interest_rate': 0,
        'witness': '',
        'test': 123
      };

      request('POST', 'assetupdate', null, testAuthToken, body)
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

  describe('assetnew', function () {
    it('Creating a new asset', function (done) {

      const body = {
        'symbol': 'SYMBOL1',
        'alias': Config.TEST_EXISTING_ALIAS1,
        'category': 'assets > assets',
        'supply': 500000,
        'max_supply': 1000000000,
        'use_inputranges': false,
        'interest_rate': 0.039900000000000005,
        'can_adjust_interest_rate': true,
        'publicvalue': 'precious',
        'witness': '',
        'precision': 0
      };

      request('POST', 'assetnew', null, testAuthToken, body)
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