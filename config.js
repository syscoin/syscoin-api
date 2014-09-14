var config = {};

//config for app
config.port = 8080;
config.host = "http://localhost";

//config for sysclient
config.syscoin = {};
config.syscoin.user = "rpcuser";
config.syscoin.password = "password";
config.syscoin.host = "127.0.0.1";
config.syscoin.port = 9001;
config.syscoin.timeout = 15000000;

module.exports = config;