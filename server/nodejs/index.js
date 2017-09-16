'use strict';

var app = require('connect')();
var http = require('http');
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
var fs = require('fs');
var jwt    = require('jsonwebtoken');
var cors = require('cors');

//load external config
var config = require('./config');
var syscoin = require('syscoin');

var syscoinClient,
rpcuser = "u",
rpcpass = "p",
rpcport = 8336;

var inputStreamError = false;
var inputStream = fs.createReadStream(config.sys_location + "syscoin.conf");
inputStream.on('error', function (e) {
  console.log("Error reading syscoin.conf specified at " + config.sys_location + " falling back to defaults. Exact error is:" + JSON.stringify(e));
  console.log("Syscoin.conf must be present, with rpcuser, rpcpass, and rpcport set in order to run the Syscoin API Server.");
  process.exit();
});

if(!inputStreamError) {
  var lineReader = require('readline').createInterface({
    input: inputStream
  });

  //read syscoin.conf for login creds, if it doesn't exist use defaults.
  lineReader.on('line', function (line) {
    if (line.indexOf('rpcuser=') === 0) {
      rpcuser = line.substr(line.indexOf('=') + 1);
    }

    if (line.indexOf('rpcpassword=') === 0) {
      rpcpass = line.substr(line.indexOf('=') + 1);
    }

    if (line.indexOf('rpcport=') === 0) {
      rpcport = line.substr(line.indexOf('=') + 1);
    }
  });

  //init SYS API on close of config file read
  lineReader.on('close', function (line) {
    initAPI();
  });
}


function initAPI() {
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

  exports.syscoinClient = syscoinClient;
  exports.rpcuser = rpcuser;
  exports.rpcpass = rpcpass;

  initSwagger();
  initHttp();
}

var swaggerDoc, options;
function initSwagger() {
  // swaggerRouter configuration
  options = {
    swaggerUiDir: '../../swagger-ui/dist',
    controllers: './controllers',
    useStubs: process.env.NODE_ENV === 'development' ? true : false // Conditionally turn on stubs (mock mode)
  };

  // The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
  var spec = fs.readFileSync('./api/swagger.yaml', 'utf8');
  swaggerDoc = jsyaml.safeLoad(spec);
}

function initHttp() {

  //CORS
  app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false //critical for proper swagger cors operations
  }));

  // Initialize the Swagger middleware
  swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
    // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
    app.use(middleware.swaggerMetadata());

    // Route security
    var securityOptions = {
      token : authCheck
    };

    app.use(middleware.swaggerSecurity(securityOptions));

    // Validate Swagger requests
    app.use(middleware.swaggerValidator());

    // Route validated requests to appropriate controller
    app.use(middleware.swaggerRouter(options));

    // Serve the Swagger documents and Swagger UI
    app.use(middleware.swaggerUi(options));

    // Start the server
    http.createServer(app).listen(config.port, function () {
      console.log('Your server is listening on port %d (http://localhost:%d)', config.port, config.port);
      console.log('Swagger-ui is available on http://localhost:%d/docs', config.port);
    });
  });

  function authCheck(req, authOrSecDef, scopesOrApiKey, callback) {
    var authToken = req.headers.token || (req.token ? req.token.value : null);

    console.log("Performing security check for TOKEN:", authToken);

    if (authToken) {
      // verifies secret and checks exp
      jwt.verify(authToken, config.api_secret, function(err, decoded) {
        if (err) {
          console.log("VERIFY ERROR: " + err);
          return callback({
            message: "Invalid token.",
            code: "InvalidToken",
            statusCode: 401,
            headers: []
          });
        } else {
          // if everything is good, save to request for use in other routes
          callback();
        }
      });
    }else{
      callback({
        message: "No token provided.",
        code: "NoTokenProvided",
        statusCode: 401,
        headers: []
      });
    }
  }
}




