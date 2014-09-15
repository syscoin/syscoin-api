var uuid = require('node-uuid');

function requestIdMdw(req, res, next) {
  req.id = uuid.v4();

  next();
}
module.exports = requestIdMdw;