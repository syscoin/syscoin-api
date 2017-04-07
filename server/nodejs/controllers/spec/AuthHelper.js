var jwt    = require('jsonwebtoken');
var Hashes   = require('jshashes');
var config = require('../../config');

var requestOptions = {};

function doAuth() {
  var token = new Hashes.SHA1().hex("u" + "p");
  token = jwt.sign({ auth: token }, config.api_secret, {
    expiresIn: 60 * 60 * 24 // expires in 24 hours
  });

  requestOptions.headers = {
    "token": token,
    "content-type": "application/json"
  };
}

module.exports.doAuth = doAuth;
module.exports.requestOptions = requestOptions;

