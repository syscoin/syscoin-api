const syscoinClient = require('../../index').syscoinClient;
const varUtils = require('./varUtils');
const commonUtils = require('./commonUtils');

function generateGenericSyscoinMethod(argList, syscoinMethod, syscoinMethodName, httpMethod, asJsonObject = false) {
  return function (args, res, next) {
    if (!syscoinMethod) {
      throw Error(`${syscoinMethodName} was called but not present.  
      Check your syscoin-core definitions to see whether it exists.`);
    }
    let callback = function (err, result, resHeaders) {
      res.setHeader('Content-Type', 'application/json');

      if (err) {
        return commonUtils.reportError(res, err);
      }

      console.log();
      commonUtils.log(syscoinMethodName, result, syscoinMethodName);
      res.end(JSON.stringify(result));
    };

    // Formating args if need it
    const rpcArgs = formatingArgs(args, syscoinMethodName);
    let arr = varUtils.getArgsArr(argList, rpcArgs, httpMethod, callback, asJsonObject);
    syscoinMethod.apply(syscoinClient, arr);
  }
}

const formatingArgs = (args, syscoinMethodName) => {
  switch (syscoinMethodName) {
    case 'syscointxfund':
      if(args && args.request && args.request.value && args.request.value['addresses']) {
        var actualAddresses = args.request.value['addresses']
        var addressObjectForCore = { addresses: actualAddresses };
        args.request.value['addresses'] = addressObjectForCore
      } else {
        console.error("ERROR: No value defined in request for 'addresses', this is a required param");
      }
    }
  return args;
}

module.exports.generateGenericSyscoinMethod = generateGenericSyscoinMethod;
