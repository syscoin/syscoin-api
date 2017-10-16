'use strict';

var jwt    = require('jsonwebtoken');
var Hashes   = require('jshashes');
const MongoClient = require('mongodb').MongoClient;

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
}

exports.storedata = function(args, res, next) {
  res.setHeader('Content-Type', 'application/json');

  //store data offchain
  let db;

  MongoClient.connect(config.mongodb.database_url, (err, database) => {
    if (err) {
      console.log("error connecting to mongodb:", err);
      res.writeHead(500);
      res.end(JSON.stringify({ success: false, message: 'Error connecting from API to data storage service. Details: ' + JSON.stringify(err) }));
    }

    db = database;

    console.log("storing data offchain: " + args.request.value.data);
    mongoUtils.insertDocuments(db, "aliasdata", [{ dataType: 'aliasdata', data: args.request.value.data }], (err, results) => {
      if (err) {
        console.log("error inserting docs:", err);
        res.writeHead(500);
        res.end(JSON.stringify({ success: false, message: 'Error inserting data into offchain data storage service. Details: ' + JSON.stringify(err) }));
      }


      console.log("offchain storage success", JSON.stringify(results));

      let ret = {
        storeLocations: [
          {dataUrl: config.mongodb.offchain_url + results.insertedIds[0]}
        ]
      };

      res.end(JSON.stringify(ret));
    });
  });
};

