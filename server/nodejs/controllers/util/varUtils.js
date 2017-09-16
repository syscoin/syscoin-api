var Config = require("../../spec/config");

function _debugLog(msg) {
  if(Config.DEBUG_ENABLED) {
    console.log(msg);
  }
}

/**
 * Takes an object which describes the required AND optional properties expected to be on an object, and if that value is defined
 * it is added to the array of params to be returned, order matters here. Order is based on the order of fullArgList.
 * @param fullArgList Array with the full list of arguments, required and optional
 * @param requestArgs Actual args past in the request, structure varies dependent on request type
 */
function getArgsArr(fullArgList, requestArgs, requestMethod, callback) {
  var arr = [], argObj = null;

  if(!requestMethod || requestMethod == "GET") {
    for(var i = 0; i < fullArgList.length; i ++) {
      argObj = fullArgList[i];
      if(notNullOrUndefined(requestArgs) && notNullOrUndefined(requestArgs[argObj.prop]) && notNullOrUndefined(requestArgs[argObj.prop].value)) {
        arr.push(requestArgs[argObj.prop].value);
    } else if (argObj && notNullOrUndefined(argObj.defaultValue)) {
        arr.push(argObj.defaultValue);
      }else{
        console.error("ERROR: No value defined in request for " + argObj.prop + " and no defaultValue specified. Is this a required param?");
      }
    }
  }else if(requestMethod == "POST") {
    for(var i = 0; i < fullArgList.length; i ++) {
      argObj = fullArgList[i];
      if(notNullOrUndefined(requestArgs) && notNullOrUndefined(requestArgs.request) && notNullOrUndefined(requestArgs.request.value) && notNullOrUndefined(requestArgs.request.value[argObj.prop])) {
        arr.push(requestArgs.request.value[argObj.prop]);
    } else if (argObj && notNullOrUndefined(argObj.defaultValue)) {
        arr.push(argObj.defaultValue);
      }else{
        console.error("ERROR: No value defined in request for " + argObj.prop + " and no defaultValue specified. Is this a required param?");
      }
    }
  }

  //add callback last
  if(callback)
    arr.push(callback);


  console.log("Args array: " + JSON.stringify(arr));

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
  BOOL_TO_NUM_STRING: "boolToNumString" //true to "1",
};

function correctTypes(param, conversionType) {
  if(notNullOrUndefined(param)) {
    console.log("CORRECT TYPES")
    switch(conversionType) {
      case TYPE_CONVERSION.NUM_TO_STRING:
        if(Array.isArray(param)) { //if param is an array, walk it and convert all elements to strings
          console.log("ARRAY")
          param = param.map((item) => {
            return item.toString();
          });
        }else{
          console.log("NOT ARRAY")
          param = param.toString();
        }
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

module.exports.getArgsArr = getArgsArr;
module.exports.notNullOrUndefined = notNullOrUndefined;
module.exports.TYPE_CONVERSION = TYPE_CONVERSION;
module.exports.correctTypes = correctTypes;