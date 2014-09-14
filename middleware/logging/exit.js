function logExitMdw(req, res, next) {
  req.log.info('[%s] [%s] request serviced', req.originalUrl, res.statusCode);

  next();
}
module.exports = logExitMdw;