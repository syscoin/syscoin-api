'use strict';
const expect = require("chai").expect;
const request = require("./TestRequest").request;
const AuthHelper = require("../spec/helper/authHelper");
const Config = require("../../spec/config");

let testAuthToken;

describe("Tests for Aliases Service API", function () {

  before(function (done) {
    console.log("------------- before -------------")
    let requestOptions = AuthHelper.requestOptions();
    if (requestOptions) {
      testAuthToken = requestOptions.headers.token
    }
    done();
  });

  describe('aliasbalance', function () {
    it("Returns balance for alias", function (done) {

      const params = { 'alias': Config.TEST_ALIAS };

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
    it("Returns information about an alias", function (done) {

      const params = { 'aliasname': Config.TEST_ALIAS };

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
    it("Creates a new Syscoin alias", function (done) {

      const body = {
        "aliasname": "testalias",
        "publicvalue": "public value",
        "accept_transfers_flags": 1,
        "expire_timestamp": 1560902147,
        "address": "12345",
        "encryption_privatekey": "12345",
        "encryption_publickey": "12345",
        "witness": ""
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
    it("Send from an alias", function (done) {

      const body = {
        "aliasfrom": Config.TEST_ALIAS,
        "amounts":
        {
          "TT9LtA6xD2vMSdHH2zpYieQGw1GTJoT1hM": 2,
          "TN2cpCVJLCpQT2xSJdLZd9BgJmom45hqCi": 1
        },
        "instantsend": true,
        "subtractfeefromamount": []
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
    it("Updates alias", function (done) {

      const body = {
        "aliasname": Config.TEST_ALIAS,
        "publicvalue": "updated public value",
        "address": Config.TEST_ADDRESS,
        "accept_transfers_flags": 1,
        "expire_timestamp": 1560902147,
        "encryption_privatekey": "12345",
        "encryption_publickey": "12345",
        "witness": ""
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
    it("List all affiliates for this alias (white list)", function (done) {

      const params = { 'aliasname': Config.TEST_ALIAS };

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
    it("Clear aliases' whitelist", function (done) {

      const body = {
        "owneralias": Config.TEST_ALIAS,
        "witness": ""
      };

      request('POST', 'aliasclearwhitelist', null, testAuthToken, body)
        .end(function (err, res) {
          //in case the whitelist is already empty, syscoing throws an error 5026 which is OK.
          if (err && err.rawResponse.includes('ERRCODE: 5026'))
            console.log(err.rawResponse)
          else
            expect(err).to.be.null;

          if (res) {
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'application/json');
            expect(res).to.be.json;
            //TO-DO: response schema validation
          }
          done();
        });
    });
  });

  describe('aliasupdatewhitelist', function () {
    it("Update to the whitelist", function (done) {

      const body = {
        "owneralias": Config.TEST_ALIAS,
        "entries": [
          {
            "alias": "test",
            "discount_percentage": 1
          }
        ],
        "witness": ""
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
  // describe('syscointxfund', function () {
  //   it("Funds a new syscoin transaction", function (done) {

  //     const body = {
  //       "addresses": [
  //         "TT9LtA6xD2vMSdHH2zpYieQGw1GTJoT1hM",
  //         "TN2cpCVJLCpQT2xSJdLZd9BgJmom45hqCi"
  //       ],
  //       "hexstring": "00740000000130750000000000006251510974657374616c69617310633038376239643762313634663034354035353336393761303838353139326563313936336437396366333636663062626630643562353738313031306161333238616566393463366436303534626631006d6d6d00000000",
  //       "instantsend": true
  //     };

  //     request('POST', 'syscointxfund', null, testAuthToken, body)
  //       .end(function (err, res) {
  //         expect(err).to.be.null;
  //         expect(res).to.have.status(200);
  //         expect(res).to.have.header('content-type', 'application/json');
  //         expect(res).to.be.json;
  //         //TO-DO: response schema validation
  //         done();
  //       });
  //   });
  // });

  describe('aliasaddscript', function () {
    it("Add redeemscript to alias", function (done) {

      const body = {
        "script": "12345"
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