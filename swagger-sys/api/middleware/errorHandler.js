function errorHandlerMdw(err, req, res, next) {
  if (!err) return next();

  res.setHeader('content-type', 'application/json');

  if (err.body) {
    res.status(err.status);
    res.json(err.body);
  }
  else { // rpc errors don't have a body property
    // always return 200 because the request was serviced and most rpc error codes don't have http
    // equivalents
    res.status(200);
    res.json({
      name: 'RPCError',
      status: 200,
      errorCode: err.code || null,
      message: err.message,
      stack: err.stack
    });
  }

  req.log.error({error: err.body}, 'an error occurred while servicing this request');
  return next();
}
module.exports = errorHandlerMdw;