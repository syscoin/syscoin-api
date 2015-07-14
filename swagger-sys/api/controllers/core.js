'use strict';

var util = require('util');

module.exports = {
  getinfo: getinfo
};

function getinfo(req, res) {

  req.log.info('getInfo()');
  req.client.getInfo(function(err, result, resHeaders) {
    if (err) res.json("ERROR");

    req.log.info(JSON.stringify(result));
    res.json(result);
    //next();
  });

  // this sends back a JSON response which is a single string
  //res.json(hello);
}
