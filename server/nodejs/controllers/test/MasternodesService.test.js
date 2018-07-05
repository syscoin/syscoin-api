'use strict';
const expect = require("chai").expect;
const request = require("./TestRequest").request;
const AuthHelper = require("../spec/helper/authHelper");
const Config = require("./config");

let testAuthToken;

describe("Tests for Masternodes Service API", function () {

  before(function (done) {
    let requestOptions = AuthHelper.requestOptions();
    if (requestOptions) {
      testAuthToken = requestOptions.headers.token
    }
    done();
  });

  /*Need to run 'walletlock' and 'walletpassphrase' first for the following tests to pass*/
  describe("walletlock", function () {
    it("Removes the wallet encryption key from memory, locking the wallet", function (done) {
      request("POST", "walletlock", null, testAuthToken, null).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe("walletpassphrase", function () {
    it("Stores the wallet decryption key in memory for ‘timeout’ seconds", function (done) {
      const body = {
        "passphrase": Config.TEST_ENCRYPT_WALLET_PASSPHRASE,
        "timeout": 60
      };
      request("POST", "walletpassphrase", null, testAuthToken, body).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        done();
      });
    });
  });

  describe('sentinelping', function () {
    it("Keep-alive message for masternode via TCP ping requests", function (done) {

      const params = {
        'version': Config.TEST_SENTINEL_VERSION
      };

      request('GET', 'sentinelping', params, testAuthToken)
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res).to.have.header('content-type', 'application/json');
          expect(res).to.be.json;
          done();
        });
    });
  });

  describe('voteraw', function () {
    it("Returns error: 'Failure to find masternode in list'", function (done) {

      const body = {
        "masternode-tx-index": 0,
        "vote-signal": "valid",
        "masternode-tx-hash": Config.TEST_EXISTING_TXID,
        "governance-hash": Config.TEST_EXISTING_TXID,
        "time": 1530802418,
        "vote-sig": "vote-sig",
        "vote-outcome": "abstain"
      };

      request('POST', 'voteraw', null, testAuthToken, body)
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.header('content-type', 'application/json');
          expect(res).to.be.json;
          if (res.status == 500 && res.text.includes('Failure to find masternode in list')) {
            console.error(res.text)
          } else {
            expect(res).to.have.status(200);
          }
          done();
        });
    });
  });

  describe('privatesend', function () {
    it("Anonymous mixing and sending coins: reset", function (done) {

      const params = {
        'command': "reset"
      };

      request('GET', 'privatesend', params, testAuthToken)
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res).to.have.header('content-type', 'application/json');
          expect(res).to.be.json;
          done();
        });
    });
  });

  describe('importelectrumwallet', function () {
    it("importelectrumwallet", function (done) {
      const params = {
        'filename': process.cwd() + Config.TEST_ELECTRUM_WALLET_PATH,
        'index': 0
      };
      request('GET', 'importelectrumwallet', params, testAuthToken)
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res).to.have.header('content-type', 'application/json');
          expect(res).to.be.json;
          done();
        });
    });
  });

});