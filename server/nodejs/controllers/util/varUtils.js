/**
 * Takes an object which describes the required AND optional properties expected to be on an object, and if that value is defined
 * it is added to the array of params to be returned, order matters here. Order is based on the order of fullArgList.
 * @param fullArgList Array with the full list of arguments, required and optional
 * @param requestArgs Actual args past in the request, structure varies dependent on request type
 */
function getArgsArr(fullArgList, requestArgs, httpMethod, callback, asJsonObject = false) {
  let arr = [];
  let jsonObject = {};

  for (var i = 0; i < fullArgList.length; i++) {
    let paramValue = null;
    let argObj = fullArgList[i];

    switch (httpMethod) {
    case 'GET':
      if (notNullOrUndefined(requestArgs) && notNullOrUndefined(requestArgs[argObj.prop]) && notNullOrUndefined(requestArgs[argObj.prop].value)) {
        paramValue = requestArgs[argObj.prop].value;
      }
      break;
    case 'POST':
    case 'PUT':
      if (notNullOrUndefined(requestArgs) && notNullOrUndefined(requestArgs.request) && notNullOrUndefined(requestArgs.request.value) && notNullOrUndefined(requestArgs.request.value[argObj.prop])) {
        paramValue = requestArgs.request.value[argObj.prop];
      }
      break;
    }

    if (argObj && !notNullOrUndefined(paramValue) && notNullOrUndefined(argObj.defaultValue)) {
      paramValue = argObj.defaultValue;
    }

    if (notNullOrUndefined(paramValue)) {
      if (argObj && notNullOrUndefined(argObj.syscoinType)) {
        console.info('Need to convert value of "' + [argObj.prop] + '" to a ' + argObj.syscoinType + ' type...');
        paramValue = correctTypes(paramValue, getConversionMethod(typeof paramValue, argObj.syscoinType));
      }

      if (argObj && notNullOrUndefined(argObj.asJsonObject) && argObj.asJsonObject && !asJsonObject) {
        console.info('Need to convert value of "' + [argObj.prop] + '" to JSON object...');
        let obj = {}
        obj[argObj.prop] = paramValue;
        paramValue = obj;
      }

      if (asJsonObject) {
        // in case Syscoin expects the request provided as JSON object
        jsonObject[argObj.prop] = paramValue;
      } else {
        // in case Syscoin expects the request provided as array of values
        arr.push(paramValue);
      }

    } else {
      console.error('ERROR: No value defined in request for ' + argObj.prop + ' and no defaultValue specified. Is this a required param?');
    }

  }

  if (asJsonObject) {
    arr.push(jsonObject);
  }

  //add callback last
  if (callback)
    arr.push(callback);

  console.log('Request parameters: ' + JSON.stringify(arr));

  return arr;
}

function getConversionMethod(typeFrom, typeTo) {

  let conversionMethod;

  switch (typeFrom) {
  case 'number':
    if (typeTo === DataType.STRING)
      conversionMethod = TYPE_CONVERSION.NUM_TO_STRING;
    else if (typeTo === DataType.NUMBER)
      conversionMethod = TYPE_CONVERSION.COPY;
    break;
  case 'boolean':
    if (typeTo === DataType.STRING)
      conversionMethod = TYPE_CONVERSION.BOOL_TO_STRING;
    else if (typeTo === DataType.NUMBER)
      conversionMethod = TYPE_CONVERSION.BOOL_TO_NUM_STRING;
    else if (typeTo === DataType.BOOLEAN)
      conversionMethod = TYPE_CONVERSION.COPY;
    break;
  case 'string':
    if (typeTo === DataType.STRING)
      conversionMethod = TYPE_CONVERSION.COPY;
    break;
  default:
    console.error('No matching pairs for data type conversion are configured');
    break;
  }

  return conversionMethod;
}

const DataType = Object.freeze(
  {
    STRING: 'string',
    NUMBER: 'number',
    BOOLEAN: 'boolean'
  }
);

/**
 * More predictable method for determining empty values
 * @param param A value that should be non-null, non-undefined
 * @returns {boolean} Whether the value is non-null, non-undefined
 */
function notNullOrUndefined(param) {
  return !(param === null || param === undefined);
}

var TYPE_CONVERSION = Object.freeze(
  {
    NUM_TO_STRING: 'numToString', //1 to "1"
    BOOL_TO_STRING: 'boolToString', //true to "true"
    BOOL_TO_NUM_STRING: 'boolToNumString', //true to "1"
    COPY: 'copy'
  });

function correctTypes(param, conversionType) {

  console.info('Converting', param, 'using', conversionType, 'method...');
  let newValue;

  if (notNullOrUndefined(param) && notNullOrUndefined(conversionType)) {
    switch (conversionType) {
    case TYPE_CONVERSION.NUM_TO_STRING:
      if (Array.isArray(param)) { //if param is an array, walk it and convert all elements to strings
        newValue = param.map((item) => {
          return item.toString();
        });
      } else {
        newValue = param.toString();
      }
      break;
    case TYPE_CONVERSION.BOOL_TO_STRING:
      newValue = param ? 'true' : 'false';
      break;
    case TYPE_CONVERSION.BOOL_TO_NUM_STRING:
      newValue = param ? '1' : '0';
      break;
    case TYPE_CONVERSION.COPY:
      newValue = param;
      break;
    default:
      throw new Error('No matching TYPE_CONVERSION found for ' + conversionType);
    }
  } else {
    console.warn('Either parameter is undefined! Cannot convert type.');
  }

  return newValue;
}

module.exports.getArgsArr = getArgsArr;
module.exports.notNullOrUndefined = notNullOrUndefined;
module.exports.TYPE_CONVERSION = TYPE_CONVERSION;
module.exports.correctTypes = correctTypes;
module.exports.DataType = DataType;