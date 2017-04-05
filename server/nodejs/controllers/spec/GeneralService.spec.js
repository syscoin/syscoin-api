var expect  = require("chai").expect;
var request = require("request");
var jwt    = require('jsonwebtoken');
var Hashes   = require('jshashes');

var config = require('../../config');

describe("General Service API", function() {

  describe("getinfo", function() {

    var url = "http://localhost:8001/getinfo";
    var token = new Hashes.SHA1().hex("u" + "p");
    token = jwt.sign({ auth: token }, config.api_secret, {
      expiresIn: 1440 // expires in 24 hours
    });

    var options = {
      headers: {
        token: token
      }
    };

    it("returns an object with the correct version property", function(done) {
      request(url, options, function(error, response, body) {
        var info = JSON.parse(body);
        expect(response.statusCode).to.equal(200);
        expect(info.sysversion).to.equal("2.1.3");
        done();
      });
    });
  });
});