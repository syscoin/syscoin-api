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
}

exports.storedata = async (args, res, next) => {
  const existingDataId = args.request.value.existingDataId;
  const dataType = "aliasdata"; //args.request.value.dataType;
  const data = args.request.value.data;
  res.setHeader('Content-Type', 'application/json');

  try {
    const db = await MongoClient.connect(config.mongodb.database_url);
    const collection = db.collection("aliasdata"); //TODO: change collectionName to variable
    console.log("storing data offchain: " + data);

    let filter;
    const newId = new ObjectID();
    if(existingDataId) {
      try {
        filter = {_id: ObjectID(existingDataId), dataType: dataType};
        let docs = await collection.find(filter).toArray();
        if(docs.length > 1) {
          throw new Error(`Data id ${existingDataId} returned ${docs.length} matches, too many!`);
        }else if(docs.length == 0) {
          console.log("No matches found for provided ID, creating new ID.");
          filter._id = newId;
        }
      }catch(e) { //objectid error, create new id
        console.log("Object ID error create new ID.");
        filter = { _id: newId, dataType: dataType};
      }
    } else {
      filter = { _id: newId, dataType: dataType};
    }

    try {
      const result = await mongoUtils.upsertDocument(collection, filter, { dataType: 'aliasdata', data: data });
        const updatedId = result.upserted ? result.upserted._id : existingDataId;
        let ret = {
          storeLocations: [
            { dataUrl: config.mongodb.offchain_url + updatedId }
          ]
        };
        res.end(JSON.stringify(ret));
    }catch(err) {
      res.writeHead(500);
      res.end(JSON.stringify({ success: false, message: 'Error inserting data into offchain data storage service. Details: ' + JSON.stringify(err) }));
    }
  }catch(err) {
    res.writeHead(500);
    res.end(JSON.stringify({ success: false, message: 'Error connecting from API to data storage service. Details: ' + JSON.stringify(err) }));
  }
}
;

