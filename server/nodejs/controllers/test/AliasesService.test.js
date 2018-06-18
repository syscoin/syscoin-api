'use strict';
const expect = require("chai").expect;
const request = require("./TestRequest").request;
const AuthHelper = require("../spec/helper/authHelper");
const Config = require("../../spec/config");

let testAuthToken;

describe("Tests for Aliases Service API", function () {

  before(function (done) {
    let requestOptions = AuthHelper.requestOptions();
    if (requestOptions) {
      testAuthToken = requestOptions.headers.token
    }
    done();
  });

  describe('aliasbalance', function () {
    it("Returns balance for alias", function (done) {

      let params = { 'alias': Config.TEST_ALIAS };

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

      let params = { 'aliasname': Config.TEST_ALIAS };

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
});