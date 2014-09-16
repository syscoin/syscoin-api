var VError = require('verror');

// customize VError serialization
var config = {
  configurable: true,
  value: function() {
    var alt = {};
    var storeKey = function(key) {
      if (key === 'jse_shortmsg' || key === 'jse_summary' || key === 'jse_cause') return;
      alt[key] = this[key];
    };
    Object.getOwnPropertyNames(this).forEach(storeKey, this);
    return alt;
  }
};
Object.defineProperty(VError.prototype, 'toJSON', config);

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
    var error = new VError(message || defaultErrorProps.message);
    error.name = err;
    error.status = defaultErrorProps.status;

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
  res.json(err);

  req.log.error({error: err}, 'an error occurred while servicing this request');
  return next();
}
module.exports.errorHandlerMdw = errorHandlerMdw;

