var config = {};

//config for app
config.port = 8081;
config.host = "http://127.0.0.1";
config.username = "admin";
config.password = "admin";

//config for sysclient
config.syscoin = {};
config.syscoin.user = "rpcuser";
config.syscoin.password = "asdfkjdfhvkchbkhadkjwhekfbevsdbdcksjdhfksjkfklshfk";
config.syscoin.host = "127.0.0.1";
config.syscoin.port = 8336;
config.syscoin.timeout = 15000000;

// logging config
config.log = {
  stdout: {
    enabled: true,
    level: 'info'
  },
  file: {
    enabled: false,
    path: '/var/log/syscoin-api/syscoin-api.log',
    level: 'info'
  }
};

module.exports = config;