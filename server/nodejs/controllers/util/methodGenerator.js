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

    let arr = varUtils.getArgsArr(argList, args, httpMethod, callback, asJsonObject);

    syscoinMethod.apply(syscoinClient, arr);
  }
}

/** Removed code was leaking request specific information into a common service
* Instead, conversion of arguments to json objects is now done in varUtils/getArgsArr 
* based on asJsonObject flag set to either the whole request or just to an argument
*/

module.exports.generateGenericSyscoinMethod = generateGenericSyscoinMethod;
