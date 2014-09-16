// add errors here
var httpErrors = {
  NotFoundError: {
    message: 'resource not found',
    status: '404'
  },
  BadRequestError: {
    message: 'bad request',
    status: '400'
  },
  NotImplementedError: {
    message: 'not implemented',
    status: '501'
  }
};

// initialize errors
var errors = module.exports.errors = Object.keys(httpErrors).reduce(function (memo, err) {
  var defaultErrorProps = httpErrors[err];

  // provide message override
  memo[err] = function (message) {
    var error = new Error(message || defaultErrorProps.message);
    error.name = err;
    error.status = defaultErrorProps.status;
    error.body = {
      name: err,
      status: defaultErrorProps.status,
      message: message || defaultErrorProps.message,
      stack: error.stack
    };

    return error;
  };

  return memo;
}, {});

function attachErrorsMdw(req, res, next) {
  req.error = errors;
  next();
}
module.exports.attachErrorsMdw = attachErrorsMdw;

function errorHandlerMdw(err, req, res, next) {
  if (!err) return next();

  res.setHeader('content-type', 'application/json');
  res.status(err.status);
  res.json(err.body);

  req.log.error({error: err.body}, 'an error occurred while servicing this request');
  return next();
}
module.exports.errorHandlerMdw = errorHandlerMdw;

