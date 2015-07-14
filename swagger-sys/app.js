'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // for testing

// load external configuration
var config = require('./config');

// initialize logger
var logger = require('./lib/logger')(config.log);

// load middleware
app.all('*', require('./api/middleware/requestId'));
app.all('*', require('./api/middleware/logging').attach(logger));
app.all('*', require('./api/middleware/logging').entry);
//app.all('*', bodyParser());
app.all('*', require('./api/middleware/cors'));
app.all('*', require('./api/middleware/client')(config.syscoin));
app.all('*', require('./api/middleware/errors'));

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  console.log('try this:\ncurl http://127.0.0.1:' + port + '/getinfo');
})


