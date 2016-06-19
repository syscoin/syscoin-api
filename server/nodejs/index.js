'use strict';

var app = require('connect')();
var http = require('http');
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
var fs = require('fs');
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens

//load external config
var config = require('./config');
var syscoin = require('syscoin');
var lineReader = require('readline').createInterface({
  input: fs.createReadStream(config.sys_location + "syscoin.conf")
});

var syscoinClient, rpcuser, rpcpass, rpcport;

lineReader.on('line', function (line) {
  if(line.indexOf('rpcuser') != -1) {
    rpcuser = line.substr(line.indexOf('=') + 1);
  }

  if(line.indexOf('rpcpassword') != -1) {
    rpcpass = line.substr(line.indexOf('=') + 1);
  }

  if(line.indexOf('rpcport') != -1) {
    rpcport = line.substr(line.indexOf('=') + 1);
  }
});

lineReader.on('close', function (line) {
  console.log("RPCUSER:", rpcuser);
  console.log("RPCPASS:", rpcpass);
  console.log("RPCPORT:", rpcport);

  syscoinClient = new syscoin.Client({
    host: 'localhost',
    port: rpcport,
    user: rpcuser,
    pass: rpcpass,
    timeout: 30000
  });
});

// all config options are optional
exports.syscoinClient = syscoinClient;

// swaggerRouter configuration
var options = {
  swaggerUi: '/swagger.json',
  controllers: './controllers',
  useStubs: process.env.NODE_ENV === 'development' ? true : false // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync('./api/swagger.yaml', 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);

//CORS
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

// AUTH with JWT
app.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  //var token = req.body.token || req.query.token || req.headers['x-access-token'];
  //
  //// decode token
  //if (token) {
  //
  //  // verifies secret and checks exp
  //  jwt.verify(token, config.api_secret, function(err, decoded) {
  //    if (err) {
  //      return res.json({ success: false, message: 'Failed to authenticate token.' });
  //    } else {
  //      // if everything is good, save to request for use in other routes
  //      req.decoded = decoded;
  //      next();
  //    }
  //  });
  //
  //} else {
  //
  //  // if there is no token
  //  // return an error
  //  return res.status(403).send({
  //    success: false,
  //    message: 'No token provided.'
  //  });
  //
  //}
  next();
});

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());

  // Start the server
  http.createServer(app).listen(config.port, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', config.port, config.port);
    console.log('Swagger-ui is available on http://localhost:%d/docs', config.port);
  });
});
