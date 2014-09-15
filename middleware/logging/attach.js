function getAttachLoggerMdw(logger) {
  return function attachLoggerMdw(req, res, next) {
    req.log = logger.child({
      id: req.id,
      ip: req.ip,
    });

    next();
  };
}
module.exports = getAttachLoggerMdw;