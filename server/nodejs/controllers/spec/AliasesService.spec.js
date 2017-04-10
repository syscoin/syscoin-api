var expect  = require("chai").expect;
var rp = require("request-promise");

var AuthHelper = require("./helper/authHelper");
var DataHelper = require("./helper/dataHelper");
var VerifyHelper = require("./helper/verifyHelper");

describe.skip("Aliases Service API", function() {

  describe("aliasauthenticate", function () {
    it("Returns privkey when authenticating with valid alias and password", function (done) {
    });
  });

  describe("aliashistory", function () {
    it("Returns history information for a given alias", function (done) {
    });
  });

  describe("aliasinfo", function () {
    it("Returns info for alias", function (done) {
    });
  });

  describe("aliaslist", function () {
    it("Returns all aliases this wallet controls", function (done) {
    });
  });

  describe("alaisnew", function () {
    it("Returns alias tx id and guid", function (done) {
    });
  });

  describe("aliasupdate", function () {
    it("Returns update txid", function (done) {
    });
  });
});