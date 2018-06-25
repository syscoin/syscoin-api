"use strict";
const expect = require("chai").expect;
const request = require("./TestRequest").request;
const AuthHelper = require("../spec/helper/authHelper");
const Config = require("./config");

let testAuthToken;

describe("Tests for Certificates Service API", function () {
  before(function (done) {
    let requestOptions = AuthHelper.requestOptions();
    if (requestOptions) {
      testAuthToken = requestOptions.headers.token;
    }
    done();
  });

  describe("certinfo", function () {
    it("Show stored values of a single certificate", function (done) {
      const params = {
        guid: Config.TEST_EXISTING_CERTIFICATE_GUID
      };

      request("GET", "certinfo", params, testAuthToken).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        //TO-DO: response schema validation
        done();
      });
    });
  });

  describe("certnew", function () {
    it("Creating a new certificate", function (done) {
      const body = {
        alias: Config.TEST_EXISTING_ALIAS1,
        title: "test cert 1",
        publicvalue: "test cert 1 public value",
        category: "certificates > company shares",
        witness: ""
      };

      request("POST", "certnew", null, testAuthToken, body).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        //TO-DO: response schema validation
        done();
      });
    });
  });

  describe("certtransfer", function () {
    it("Transfer a certificate you own to another alias", function (done) {
      const body = {
        "guid": Config.TEST_EXISTING_CERTIFICATE_GUID,
        "alias": Config.TEST_EXISTING_ALIAS2,
        "accessflags": 2,
        "publicvalue": "",
        "witness": ""
      };

      request("POST", "certtransfer", null, testAuthToken, body).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        //TO-DO: response schema validation
        done();
      });
    });
  });

  describe("certupdate", function () {
    it("Transfer a certificate you own to another alias", function (done) {
      const body = {
        "guid": Config.TEST_EXISTING_CERTIFICATE_GUID,
        "title": "updated test cert 1 title",
        "publicvalue": "updated public value",
        "category": "certificates > company shares",
        "witness": ""
      };

      request("POST", "certupdate", null, testAuthToken, body).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header("content-type", "application/json");
        expect(res).to.be.json;
        //TO-DO: response schema validation
        done();
      });
    });
  });



});
