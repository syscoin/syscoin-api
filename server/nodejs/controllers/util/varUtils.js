/**
 * Takes an object which describes the default properties expected to be on an object, and if that value is not defined
 * the function set it to the default value specified in argList.
 * @param argList An object with properties representing the default properties, and value repesenting what the default values should be
 * @param requestArgs Actual args past in the request
 */
function setDefaultArgs(argList, requestArgs) {
  for(var arg in argList) {
    console.log("Checking " + arg);
    if(!requestArgs[arg] || !requestArgs[arg].value) {
      console.log(arg + " is not defined, setting to: " + argList[arg]);
      requestArgs[arg].value = argList[arg];
    }else{
      console.log("Request has prop " + arg + " set to " + JSON.stringify(requestArgs[arg]));
    }
  }

  return requestArgs;
}

module.exports.setDefaultArgs = setDefaultArgs;