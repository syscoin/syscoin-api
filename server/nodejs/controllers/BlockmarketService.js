'use strict';

const jwt = require('jsonwebtoken');
const Hashes = require('jshashes');
const config = require('../config');
const rpcuser = require('../index').rpcuser;
const rpcpass = require('../index').rpcpass;

exports.login = function (args, res) {
  /**
   * parameters expected in the args:
  * auth (String)
  **/
  let response = {
    success: false,
    message: null,
    token: null
  };

  const auth = args.auth ? args.auth.value : null;
  const validAuth = new Hashes.SHA1().hex(rpcuser + rpcpass);

  if (auth && auth === validAuth) {
    console.info('Login successful!');
    // if user is found and password is right create a token
    response.token = jwt.sign({ auth: validAuth }, config.api_secret, {
      expiresIn: 60 * 60 * 24 // expires in 24 hours
    });
    response.success = true;
    response.message = 'Enjoy your token!';
  } else {
    console.info('Login attempt failed! Provided credentials don\'t match our records');
    response.message = 'Authentication failed: invalid username/password.';
    res.statusCode = 401;
  }

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(response));
};