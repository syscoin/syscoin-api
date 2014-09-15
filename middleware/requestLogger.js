function getRequestLoggerMdw(logger) {
  return function requestLoggerMdw(req, res, next) {
    req.log = logger.child({
      id: req.id,
      path: req.path
    });

    return next();
  };
}
module.exports = getRequestLoggerMdw;