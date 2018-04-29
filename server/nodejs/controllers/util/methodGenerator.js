var syscoinClient = require('../../index').syscoinClient;
var varUtils = require('./varUtils');
var commonUtils = require('./commonUtils');

function generateGenericSyscoinMethod(argList, syscoinMethod, syscoinMethodName, httpMethod) {
    return function(args, res, next) {
        if (!syscoinMethod) {
            throw Error(`${syscoinMethodName} was called but not present.  
            Check your syscoin-core definitions to see whether it exists.`);
        }
        let callback = function(err, result, resHeaders) {
            res.setHeader('Content-Type', 'application/json');
    
            if (err) {
                return commonUtils.reportError(res, err);
            }
    
            console.log(`${syscoinMethodName}: ${result}`);
            res.end(JSON.stringify(result));
        };
        let arr = varUtils.getArgsArr(argList,args,httpMethod,callback);
        syscoinMethod.apply(syscoinClient,arr);
    }
} 

module.exports.generateGenericSyscoinMethod = generateGenericSyscoinMethod;
