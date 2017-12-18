'use strict';

var jwt    = require('jsonwebtoken');
var Hashes   = require('jshashes');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

var config = require('../config');
var rpcuser = require('../index').rpcuser;
var rpcpass = require('../index').rpcpass;
var mongoUtils = require('./util/mongoUtils');

exports.login = function(args, res, next) {
  /**
   * parameters expected in the args:
  * auth (String)
  **/
  var auth = args.auth.value;
  console.log("Got auth with request:" + auth + " checkin against:" + rpcuser + rpcpass);

  var validAuth = new Hashes.SHA1().hex(rpcuser + rpcpass);
  res.setHeader('Content-Type', 'application/json');

  console.log("Valid pass:" + validAuth + " vs " + auth);

  if (auth != validAuth) {
    res.writeHead(401);
    res.end(JSON.stringify({ success: false, message: 'Authentication failed. Wrong password.' }));
  } else {

    // if user is found and password is right
    // create a token
    var token = jwt.sign({ auth: validAuth }, config.api_secret, {
      expiresIn: 60 * 60 * 24 // expires in 24 hours
    });

    // return the information including token as JSON
    res.end(JSON.stringify({
      success: true,
      message: 'Enjoy your token!',
      token: token
    }));
  }
};