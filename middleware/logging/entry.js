function logEntryMdw(req, res, next) {
  req.log.info({
    headers: req.headers
  }, '[%s] request received', req.originalUrl);

  next();
}
module.exports = logEntryMdw;