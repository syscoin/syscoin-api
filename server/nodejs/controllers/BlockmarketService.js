'use strict';

exports.login = function(args, res, next) {
  var auth = args.auth.value;
  console.log("Got auth with request:" + auth);

  res.end(JSON.stringify(("thanks for " + auth)));
};

