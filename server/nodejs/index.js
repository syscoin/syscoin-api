'use strict';

require('dotenv').config();

const app = require('connect')();
const http = require('http');
const swaggerTools = require('swagger-tools');
const jsyaml = require('js-yaml');
const fs = require('fs');
const jwt    = require('jsonwebtoken');
const cors = require('cors');

//load external config
const config = require('./config');
const SyscoinClient = require('@syscoin/syscoin-core');
const commonUtils = require('./controllers/util/commonUtils');

let syscoinClient,
  rpcuser = "u",
  rpcpass = "p",
  rpcport = 8336;

let swaggerDoc, options;

//CORS
app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false //critical for proper swagger cors operations
}));

const verboseLog = (msg) => {
  if(config.verbose_debug)
    console.log(`>> ${msg}`);
};

const startServer = async () => {
  verboseLog("startServer");
  await readConfig();
  initSyscoin();
  initSwaggerUI();
  await initMiddleware();
  initHttp();
};

const readConfig = async () => {
  verboseLog('readConfig');

  let lineReader = require('readline').createInterface({
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
  return new Promise(resolve => {
    lineReader.on('close', function (line) {
      verboseLog("readConfig :: Done");
      resolve(true);
    });
  });
};

const initSyscoin = () => {
  verboseLog("initSyscoin");
  console.log("RPCUSER:", rpcuser);
  console.log("RPCPASS:", rpcpass);
  console.log("RPCPORT:", rpcport);

  syscoinClient = new SyscoinClient({
    host: 'localhost',
    port: rpcport,
    username: rpcuser,
    password: rpcpass,
    timeout: 30000
  });

  exports.syscoinClient = syscoinClient;
  exports.rpcuser = rpcuser;
  exports.rpcpass = rpcpass;
};

const initSwaggerUI = () => {
  verboseLog("initSwaggerUI");
  // swaggerRouter configuration
  if(config.run_as_subprocess) {
    options = {
      controllers: config.api_controllers,
      useStubs: process.env.NODE_ENV === 'development' ? true : false // Conditionally turn on stubs (mock mode)
    };
  }else {
    options = {
      swaggerUiDir: '../../swagger-ui/dist',
      controllers: config.api_controllers,
      useStubs: process.env.NODE_ENV === 'development' ? true : false // Conditionally turn on stubs (mock mode)
    };
  }

  // The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
  let spec = fs.readFileSync(config.api_yaml, 'utf8');
  swaggerDoc = jsyaml.safeLoad(spec);
};

const initMiddleware = async () => {
  verboseLog("initMiddleware");
  // Initialize the Swagger middleware
  return new Promise(resolve => {
    swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
      // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
      app.use(middleware.swaggerMetadata());

      // Route security
      let securityOptions = {
        token: authCheck
      };

      app.use(middleware.swaggerSecurity(securityOptions));

      // Validate Swagger requests
      app.use(middleware.swaggerValidator());

      // Route validated requests to appropriate controller
      app.use(middleware.swaggerRouter(options));

      // Serve the Swagger documents and Swagger UI
      app.use(middleware.swaggerUi(options));

      verboseLog("initMiddleware :: Done");
      resolve(true);
    });
  });
};

const initHttp = () => {
  verboseLog("initHttp");
  // Start the server
  http.createServer(app).listen(config.port, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', config.port, config.port);
    console.log('Swagger-ui is available on http://localhost:%d/docs', config.port);
  });
};

const authCheck = (req, authOrSecDef, scopesOrApiKey, callback) => {
  let authToken = req.headers.token || (req.token ? req.token.value : null);

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
};

//app startup based on syscoin.conf read
let inputStreamError = false;
let inputStream = fs.createReadStream(config.sys_location + "syscoin.conf");
inputStream.on('error', function (e) {
  console.log("Error reading syscoin.conf specified at " + config.sys_location + " falling back to defaults. Exact error is:" + JSON.stringify(e));
  console.log("Syscoin.conf must be present, with rpcuser, rpcpass, and rpcport set in order to run the Syscoin API Server.");
  process.exit();
});

if(!inputStreamError && !config.run_as_subprocess) {
  startServer();
}

module.exports.startServer = startServer;




