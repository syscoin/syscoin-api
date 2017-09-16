function reportError(response, errorStr) {
  console.log("Error: " + errorStr);
  response.statusCode = 500;

  return response.end(JSON.stringify(errorStr.toString()));
}

module.exports.reportError = reportError;