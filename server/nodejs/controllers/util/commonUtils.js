const config = require('../../config');

function reportError(response, errorStr) {
  console.log("Error: " + errorStr);
  response.statusCode = 500;

  return response.end(JSON.stringify(errorStr.toString()));
}

/**
 *
 * @param args Values to be logged, last value should be the reporting method name (string)
 */
function log(...args) {
  const reportingMethod = args[args.length-1];
  if(config.debugEnabled) {
    if(config.methodsWithLoggingDisabled.length > 0 && config.methodsWithLoggingDisabled.filter((item) => {
      return item == reportingMethod;
    }).length > 0) {
      console.log(reportingMethod + " not logged because disabled + debug");
      return; //if the reportingMethod is in the array of methods w logging disabled, dont log it!
    }
  }
  console.log(args);
}

module.exports.reportError = reportError;
module.exports.log = log;