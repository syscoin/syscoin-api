var expect  = require("chai").expect;
var rp = require("request-promise");
var Hashes   = require('jshashes');

var AuthHelper = require("./helper/authHelper");

describe("Blockmarket Service API", function() {

  describe("login", function () {
    it("Returns a token when proper user/pass supplied", function (done) {
      var url = "http://localhost:8001/login";
      var auth = new Hashes.SHA1().hex("u" + "p");
      var requestOptions = AuthHelper.requestOptions();
      requestOptions.qs = {
        "auth": auth
      };

      rp(url, requestOptions).then(function (result) {
        expect(result.statusCode).to.equal(200);

        var authResult = JSON.parse(result.body);
        expect(authResult.token).to.exist;
        done();
      });
    });

    it("Returns an error when invalid user/pass supplied", function (done) {
      var url = "http://localhost:8001/login";
      var auth = new Hashes.SHA1().hex("WRONGUSER" + "WRONGPASS");
      var requestOptions = AuthHelper.requestOptions();
      requestOptions.qs = {
        "auth": auth
      };

      rp(url, requestOptions)
        .then(function (result) {},
        function(error) {
          expect(error.statusCode).to.equal(401);

          var authResult = JSON.parse(error.response.body);
          expect(authResult.success).to.equal(false);
          done();
      });
    });
  });
});