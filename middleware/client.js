var syscoin = require('syscoin');

function getClientMdw(clientConfig) {
  var client = new syscoin.Client({
      host: clientConfig.host,
      port: clientConfig.port,
      user: clientConfig.user,
      pass: clientConfig.password,
      timeout: clientConfig.timeout
  });

  return function clientMdw(req, res, next) {
    req.client = client;

    return next();
  };
}
module.exports = getClientMdw;