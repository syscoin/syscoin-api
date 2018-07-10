const syscoinClient = require('../../index').syscoinClient;
const varUtils = require('./varUtils');
const commonUtils = require('./commonUtils');

function generateGenericSyscoinMethod(argList, syscoinMethod, syscoinMethodName, httpMethod, asJsonObject = false) {
  return function (args, res) {
    if (!syscoinMethod) {
      throw Error(`${syscoinMethodName} was called but not present.  
      Check your syscoin-core definitions to see whether it exists.`);
    }
    let callback = function (err, result) {
      res.setHeader('Content-Type', 'application/json');

      if (err) {
        return commonUtils.reportError(res, err);
      }

      console.log();
      commonUtils.log(syscoinMethodName, result, syscoinMethodName);
      res.end(JSON.stringify(result));
    };

    let arr = varUtils.getArgsArr(argList, args, httpMethod, callback, asJsonObject);
    syscoinMethod.apply(syscoinClient, arr);
  };
}

module.exports.generateGenericSyscoinMethod = generateGenericSyscoinMethod;
