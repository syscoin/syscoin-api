var expect  = require("chai").expect;
var rp = require("request-promise");

var AuthHelper = require("./helper/authHelper");

describe.skip("Offer Service API", function() {

  describe("offernew", function() {
    var url = "http://localhost:8001/offernew";

    it("Returns an array with the tx id and offer guid", function(done) {
      var requestOptions = AuthHelper.requestOptions();
      requestOptions.method =  "POST";
      requestOptions.json = {
        "alias": "testuser",
        "category": "unit testing",
        "title": "title here",
        "quantity": 10,
        "price": 1,
        "description": "Description goes here",
        "currency": "SYS",
        "certguid": "",
        "paymentoptions": "SYS",
        "geolocation": "",
        "safesearch": "Yes",
        "private": true
      };

      rp(url, requestOptions).then(function(result) {
        expect(result.statusCode).to.equal(200);
        expect(result.body.length).to.equal(2);
        expect(result.body[0].length).to.equal(64); //tx id
        expect(result.body[1].length).to.equal(16); //offer guid
        done();
      });
    });
  });

  describe("offerupdate", function() {
    var url = "http://localhost:8001/offerupdate";

    it("Returns an array with the tx id", function(done) {
      var requestOptions = AuthHelper.requestOptions();
      requestOptions.method =  "POST";
      requestOptions.json = {
        "alias": "testuser",
        "guid": "1c3889997c39e979",
        "category": "unit testing",
        "title": "title here updated",
        "quantity": 10,
        "price": 1,
        "description": "Description goes here updated",
        "currency": "SYS",
        "certguid": "",
        "paymentoptions": "SYS",
        "geolocation": "",
        "safesearch": "Yes",
        "private": true,
        "comission": 0
      };

      rp(url, requestOptions).then(function(result) {
        expect(result.statusCode).to.equal(200);
        expect(result.body.length).to.equal(1);
        expect(result.body[0].length).to.equal(64); //tx id
        done();
      });
    });
  });
});