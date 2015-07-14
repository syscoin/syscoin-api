// add errors here
var errors = {
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
module.exports = Object.keys(errors).reduce(function (memo, err) {
  var defaultErrorProps = errors[err];

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