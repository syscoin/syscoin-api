var errors = require('../lib/errors');

function attachErrorsMdw(req, res, next) {
  req.error = errors;
  next();
}
module.exports = attachErrorsMdw;
