function errorHandlerMdw(err, req, res, next) {
  if (!err) return next();

  res.setHeader('content-type', 'application/json');
  res.status(err.status);
  res.json(err.body);

  req.log.error({error: err.body}, 'an error occurred while servicing this request');
  return next();
}
module.exports = errorHandlerMdw;