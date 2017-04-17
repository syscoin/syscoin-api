var Config = require("../../spec/config");

function _debugLog(msg) {
  if(Config.DEBUG_ENABLED) {
    console.log(msg);
  }
}

/**
 * Takes an object which describes the default properties expected to be on an object, and if that value is not defined
 * the function set it to the default value specified in argList.
 * @param argList An object with properties representing the default properties, and value repesenting what the default values should be
 * @param requestArgs Actual args past in the request, structure varies dependent on request type
 */
function setDefaultArgs(argList, requestArgs, requestMethod) {
  if(!requestMethod || requestMethod == "GET") {
    for (var arg in argList) {
      _debugLog("Checking GET var " + arg);
      if (requestArgs[arg] === undefined || requestArgs[arg].value === undefined) {
        _debugLog(arg + " is not defined, setting to: " + argList[arg]);
        requestArgs[arg] = { value: argList[arg] };
      } else {
        _debugLog("Request has prop " + arg + " set to " + JSON.stringify(requestArgs[arg].value));
      }
    }
  }else if(requestMethod == "POST") {
    for (var arg in argList) {
      _debugLog("Checking POST var " + arg);
      if (requestArgs.request.value[arg] === undefined) {
        _debugLog(arg + " is not defined, setting to: " + argList[arg]);
        requestArgs.request.value[arg] = argList[arg];
      } else {
        _debugLog("Request has prop " + arg + " set to " + JSON.stringify(requestArgs.request.value[arg]));
      }
    }
  }

  return requestArgs;
}


/**
 * Takes an object which describes the required AND optional properties expected to be on an object, and if that value is defined
 * it is added to the array of params to be returned, order matters here. Order is based on the order of fullArgList.
 * @param fullArgList Array with the full list of arguments, required and optional
 * @param requestArgs Actual args past in the request, structure varies dependent on request type
 */
function getArgsArr(fullArgList, requestArgs, requestMethod, callback) {
  var arr = [];
  if(!requestMethod || requestMethod == "GET") {
    for (var arg in fullArgList) {
      if(notNullOrUndefined(requestArgs[fullArgList[arg]].value))
        arr.push(requestArgs[fullArgList[arg]].value);
    }
  }else if(requestMethod == "POST") {
    for (var arg in fullArgList) {
      if(notNullOrUndefined(requestArgs.request.value[fullArgList[arg]]))
        arr.push(requestArgs.request.value[fullArgList[arg]]);
    }
  }

  //add callback last
  if(callback)
    arr.push(callback);

  return arr;
}

/**
 * More predictable method for determining empty values
 * @param param A value that should be non-null, non-undefined
 * @returns {boolean} Whether the value is non-null, non-undefined
 */
function notNullOrUndefined(param) {
  return !(param === null || param === undefined);
}

var TYPE_CONVERSION = {
  NUM_TO_STRING: "numToString", //1 to "1"
  BOOL_TO_STRING: "boolToString", //true to "true"
  BOOL_TO_NUM_STRING: "boolToNumString" //true to "1"
};

function correctTypes(param, conversionType) {
  if(notNullOrUndefined(param)) {
    switch(conversionType) {
      case TYPE_CONVERSION.NUM_TO_STRING:
        param = param.toString();
        break;

      case TYPE_CONVERSION.BOOL_TO_STRING:
        param = param ? "true" : "false";
        break;

      case TYPE_CONVERSION.BOOL_TO_NUM_STRING:
        param = param ? "1" : "0";
        break;

      default:
        throw new Error("No matching TYPE_CONVERSION found for " + conversionType);
    }
  }else{
    console.warn("Param is undefined! Cannot convert type.");
  }

  return param;
}

module.exports.setDefaultArgs = setDefaultArgs;
module.exports.getArgsArr = getArgsArr;
module.exports.notNullOrUndefined = notNullOrUndefined;
module.exports.TYPE_CONVERSION = TYPE_CONVERSION;
module.exports.correctTypes = correctTypes;