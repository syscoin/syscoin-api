var expect  = require("chai").expect;
var request = require("request");

var AuthHelper = require("./AuthHelper");
AuthHelper.doAuth();

describe("Offer Service API", function() {

  describe("offernew", function() {
    var url = "http://localhost:8001/offernew";

    it("Returns an array with the tx id and offer guid", function(done) {
      var requestOptions = AuthHelper.requestOptions;
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

      request(url, requestOptions, function(error, response, result) {
        expect(response.statusCode).to.equal(200);
        expect(result.length).to.equal(2);
        expect(result[0].length).to.equal(64); //tx id
        expect(result[1].length).to.equal(16); //offer guid
        done();
      });
    });
  });
});