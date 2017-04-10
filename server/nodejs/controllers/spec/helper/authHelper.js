var jwt    = require('jsonwebtoken');
var Hashes   = require('jshashes');
var config = require('../../../config');

var _requestOptions = {};

function _doAuth() {
  var hash = new Hashes.SHA1().hex("u" + "p");
  var token = jwt.sign({ auth: hash }, config.api_secret, {
    expiresIn: 60 * 60 * 24 // expires in 24 hours
  });

  _requestOptions.headers = {
    "token": token,
    "content-type": "application/json"
  };

  _requestOptions.resolveWithFullResponse = true;
}

function _reset() {
  var newRequestOptions = {};
  if(!_requestOptions.headers) {
    _doAuth();
  }

  newRequestOptions.headers = {
    "token": _requestOptions.headers.token,
    "content-type": "application/json"
  };

  newRequestOptions.resolveWithFullResponse = true;

  _requestOptions = newRequestOptions;
}

function requestOptions() {
  _reset();

  return _requestOptions;
}

module.exports.requestOptions = requestOptions;

