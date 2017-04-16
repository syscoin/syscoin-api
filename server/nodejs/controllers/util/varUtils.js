var Config = require("../../spec/config");

/**
 * Takes an object which describes the default properties expected to be on an object, and if that value is not defined
 * the function set it to the default value specified in argList.
 * @param argList An object with properties representing the default properties, and value repesenting what the default values should be
 * @param requestArgs Actual args past in the request
 */
function setDefaultArgs(argList, requestArgs, requestMethod) {
  if(!requestMethod || requestMethod == "GET") {
    for (var arg in argList) {
      log("Checking GET var " + arg);
      if (requestArgs[arg] === undefined || requestArgs[arg].value === undefined) {
        log(arg + " is not defined, setting to: " + argList[arg]);
        requestArgs[arg] = { value: argList[arg] };
      } else {
        log("Request has prop " + arg + " set to " + JSON.stringify(requestArgs[arg].value));
      }
    }
  }else if(requestMethod == "POST") {
    for (var arg in argList) {
      log("Checking POST var " + arg);
      if (requestArgs.request.value[arg] === undefined) {
        log(arg + " is not defined, setting to: " + argList[arg]);
        requestArgs.request.value[arg] = argList[arg];
      } else {
        log("Request has prop " + arg + " set to " + JSON.stringify(requestArgs.request.value[arg]));
      }
    }
  }

  return requestArgs;
}

function getArgsArr(requiredArgList, requestArgs, requestMethod, callback) {
  var arr = [];
  if(!requestMethod || requestMethod == "GET") {
    for (var arg in requiredArgList) {
      arr.push(requestArgs[requiredArgList[arg]].value);
    }
  }else if(requestMethod == "POST") {
    for (var arg in requiredArgList) {
      arr.push(requestArgs.request.value[requiredArgList[arg]]);
    }
  }

  //add callback last
  if(callback)
    arr.push(callback);

  return arr;
}

function log(msg) {
  if(Config.DEBUG_ENABLED) {
    console.log(msg);
  }
}

module.exports.setDefaultArgs = setDefaultArgs;
module.exports.getArgsArr = getArgsArr;