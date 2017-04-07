var expect  = require("chai").expect;
var request = require("request");

var AuthHelper = require("./AuthHelper");
AuthHelper.doAuth();

describe("General Service API", function() {

  describe("getinfo", function() {

    it("Returns an object with the version property defined", function(done) {
      var url = "http://localhost:8001/getinfo";
      request(url, AuthHelper.requestOptions, function(error, response, body) {
        var info = JSON.parse(body);
        expect(response.statusCode).to.equal(200);
        expect(info.sysversion).to.not.equal(undefined);
        done();
      });
    });
  });
});